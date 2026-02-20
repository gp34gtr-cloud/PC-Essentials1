/**
 * The MongolZ Live Data API
 * Fetches real-time data from HLTV.org for The MongolZ CS2 team
 * Auto-updates ranking, matches, results, roster, and news
 *
 * Note: For live data to work, the page must be served from a web server (http/https),
 * not from a local file:// URL due to browser CORS restrictions.
 */

const MongolzAPI = {
    // The MongolZ team ID on HLTV
    TEAM_ID: 11518,
    TEAM_NAME: 'The MongolZ',

    // CORS proxy for HLTV requests (multiple fallbacks)
    CORS_PROXIES: [
        'https://api.allorigins.win/raw?url=',
        'https://corsproxy.io/?',
        'https://api.codetabs.com/v1/proxy?quest='
    ],

    currentProxyIndex: 0,

    // Cache to reduce API calls (5 minute cache)
    cache: {},
    CACHE_DURATION: 5 * 60 * 1000,

    // Fallback data (accurate as of last update - will be used if live fetch fails)
    // Update this data periodically to keep it accurate
    FALLBACK_DATA: {
        ranking: { ranking: 1, points: '~900 points', teamName: 'The MongolZ' },
        roster: [
            { nickname: 'bLitz', realName: 'Garidmagnai Byambasuren', role: 'IGL', hltvId: '18068' },
            { nickname: 'Techno4K', realName: 'Sodbayar Munkhbold', role: 'Rifler', hltvId: '20641' },
            { nickname: '910', realName: 'Usukhbayar Banzragch', role: 'AWPer', hltvId: '20308' },
            { nickname: 'mzinho', realName: 'Ayush Batbold', role: 'Rifler', hltvId: '22977' },
            { nickname: 'cobrazera', realName: 'Anarbileg Uuganbayar', role: 'Rifler', hltvId: '29438' }
        ],
        recentResults: [
            { opponent: 'Team Vitality', score: '0 - 2', event: 'StarLadder Budapest Major - Semifinal', date: 'Dec 11, 2025', isWin: false },
            { opponent: 'G2 Esports', score: '2 - 0', event: 'StarLadder Budapest Major - Quarterfinal', date: 'Dec 6, 2025', isWin: true },
            { opponent: 'FaZe Clan', score: '13 - 7', event: 'StarLadder Budapest Major - Group Stage', date: 'Dec 5, 2025', isWin: true },
            { opponent: 'Team Liquid', score: '13 - 9', event: 'StarLadder Budapest Major - Group Stage', date: 'Dec 4, 2025', isWin: true },
            { opponent: 'FURIA', score: '0 - 2', event: 'IEM Chengdu - Playoffs', date: 'Nov 7, 2025', isWin: false }
        ],
        upcomingMatches: [
            { opponent: 'TBD', event: 'IEM Krakow 2026', date: new Date('2026-01-28T18:00:00'), dateStr: 'Jan 28 - Feb 8, 2026' },
            { opponent: 'TBD', event: 'PGL Cluj-Napoca 2026', date: new Date('2026-02-14T15:00:00'), dateStr: 'Feb 14-22, 2026' },
            { opponent: 'TBD', event: 'ESL Pro League S23', date: new Date('2026-02-27T19:00:00'), dateStr: 'Feb 27 - Mar 9, 2026' }
        ],
        news: [
            { title: 'The MongolZ Reach Major Semifinal', date: 'December 2025', tag: 'Tournament', excerpt: 'Strong run at StarLadder Budapest Major ends in semifinal loss to Vitality.' },
            { title: 'cobrazera Joins The MongolZ', date: 'Late 2025', tag: 'Roster', excerpt: 'Anarbileg "cobrazera" Uuganbayar joins as the fifth member of the roster.' },
            { title: 'IEM Krakow 2026 Coming Up', date: 'January 2026', tag: 'Preview', excerpt: 'The MongolZ prepare for first S-Tier event of 2026 starting January 28.' },
            { title: 'Team Earnings Hit $2.4M+', date: 'January 2026', tag: 'Milestone', excerpt: 'Total prize winnings reach approximately $2,464,661 across all tournaments.' }
        ],
        lastFallbackUpdate: '2026-01-21'
    },

    /**
     * Fetch with CORS proxy and fallback
     */
    async fetchWithProxy(url) {
        const cacheKey = url;
        const cached = this.cache[cacheKey];

        if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
            return cached.data;
        }

        for (let i = 0; i < this.CORS_PROXIES.length; i++) {
            const proxyIndex = (this.currentProxyIndex + i) % this.CORS_PROXIES.length;
            const proxy = this.CORS_PROXIES[proxyIndex];

            try {
                const response = await fetch(proxy + encodeURIComponent(url), {
                    headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
                    }
                });

                if (response.ok) {
                    const data = await response.text();
                    this.cache[cacheKey] = { data, timestamp: Date.now() };
                    this.currentProxyIndex = proxyIndex;
                    return data;
                }
            } catch (error) {
                console.warn(`Proxy ${proxyIndex} failed:`, error.message);
            }
        }

        throw new Error('All CORS proxies failed');
    },

    /**
     * Parse HTML helper
     */
    parseHTML(html) {
        const parser = new DOMParser();
        return parser.parseFromString(html, 'text/html');
    },

    /**
     * Get team world ranking from HLTV
     */
    async getTeamRanking() {
        try {
            const html = await this.fetchWithProxy('https://www.hltv.org/ranking/teams');
            const doc = this.parseHTML(html);

            // Find The MongolZ in the ranking
            const teamRows = doc.querySelectorAll('.ranked-team');

            for (const row of teamRows) {
                const teamName = row.querySelector('.name')?.textContent?.trim();
                if (teamName && teamName.toLowerCase().includes('mongolz')) {
                    const ranking = row.querySelector('.position')?.textContent?.trim().replace('#', '');
                    const points = row.querySelector('.points')?.textContent?.trim();

                    return {
                        ranking: parseInt(ranking) || null,
                        points: points || null,
                        teamName: teamName
                    };
                }
            }

            return null;
        } catch (error) {
            console.error('Failed to fetch ranking:', error);
            return null;
        }
    },

    /**
     * Get team details including roster
     */
    async getTeamDetails() {
        try {
            const html = await this.fetchWithProxy(`https://www.hltv.org/team/${this.TEAM_ID}/the-mongolz`);
            const doc = this.parseHTML(html);

            // Parse roster
            const roster = [];
            const playerElements = doc.querySelectorAll('.bodyshot-team-bg a, .players-table tbody tr');

            // Try bodyshot container first
            const bodyshotPlayers = doc.querySelectorAll('.bodyshot-team a');
            if (bodyshotPlayers.length > 0) {
                bodyshotPlayers.forEach(player => {
                    const nickname = player.querySelector('.playerFlagName .text-ellipsis')?.textContent?.trim() ||
                                    player.querySelector('.nickname')?.textContent?.trim();
                    const imgSrc = player.querySelector('img')?.src || '';

                    if (nickname) {
                        roster.push({
                            nickname: nickname,
                            realName: '',
                            role: '',
                            image: imgSrc
                        });
                    }
                });
            }

            // Try player cards if bodyshot didn't work
            if (roster.length === 0) {
                const playerCards = doc.querySelectorAll('.players-table .player-row, .grid-cell a[href*="/player/"]');
                playerCards.forEach(card => {
                    const nickname = card.querySelector('.nickname, .text-ellipsis')?.textContent?.trim() ||
                                    card.textContent?.trim();
                    if (nickname && nickname.length < 20) {
                        roster.push({
                            nickname: nickname,
                            realName: '',
                            role: '',
                            image: ''
                        });
                    }
                });
            }

            // Get stats
            const stats = {};
            const statBoxes = doc.querySelectorAll('.profile-team-stat');
            statBoxes.forEach(box => {
                const label = box.querySelector('.label')?.textContent?.trim()?.toLowerCase();
                const value = box.querySelector('.value')?.textContent?.trim();
                if (label && value) {
                    stats[label] = value;
                }
            });

            return { roster, stats };
        } catch (error) {
            console.error('Failed to fetch team details:', error);
            return null;
        }
    },

    /**
     * Get upcoming matches
     */
    async getUpcomingMatches() {
        try {
            const html = await this.fetchWithProxy(`https://www.hltv.org/team/${this.TEAM_ID}/the-mongolz#tab-matchesBox`);
            const doc = this.parseHTML(html);

            const matches = [];
            const matchElements = doc.querySelectorAll('.upcoming-match, .match-row');

            matchElements.forEach(match => {
                const opponent = match.querySelector('.team-name:not(.team1), .matchTeam:not(.team1) .matchTeamName')?.textContent?.trim();
                const event = match.querySelector('.event-name, .matchEvent .matchEventName')?.textContent?.trim();
                const date = match.querySelector('.match-time, .matchTime')?.getAttribute('data-unix') ||
                            match.querySelector('.date')?.textContent?.trim();
                const matchLink = match.querySelector('a')?.href || '';

                if (opponent) {
                    matches.push({
                        opponent: opponent,
                        event: event || 'TBD',
                        date: date ? new Date(parseInt(date)) : null,
                        dateStr: date,
                        link: matchLink
                    });
                }
            });

            return matches.slice(0, 5);
        } catch (error) {
            console.error('Failed to fetch upcoming matches:', error);
            return [];
        }
    },

    /**
     * Get recent match results
     */
    async getRecentResults() {
        try {
            const html = await this.fetchWithProxy(`https://www.hltv.org/results?team=${this.TEAM_ID}`);
            const doc = this.parseHTML(html);

            const results = [];
            const resultElements = doc.querySelectorAll('.result-con');

            resultElements.forEach((result, index) => {
                if (index >= 10) return; // Limit to 10 results

                const teams = result.querySelectorAll('.team');
                const score = result.querySelector('.result-score')?.textContent?.trim();
                const event = result.querySelector('.event-name')?.textContent?.trim();
                const date = result.querySelector('.date-cell')?.textContent?.trim();

                if (teams.length >= 2) {
                    const team1 = teams[0].textContent?.trim();
                    const team2 = teams[1].textContent?.trim();
                    const scores = score?.split(' - ') || [];

                    // Determine if MongolZ won
                    const isMongolzTeam1 = team1?.toLowerCase().includes('mongolz');
                    const team1Score = parseInt(scores[0]) || 0;
                    const team2Score = parseInt(scores[1]) || 0;
                    const isWin = isMongolzTeam1 ? team1Score > team2Score : team2Score > team1Score;

                    const opponent = isMongolzTeam1 ? team2 : team1;
                    const mongolzScore = isMongolzTeam1 ? team1Score : team2Score;
                    const opponentScore = isMongolzTeam1 ? team2Score : team1Score;

                    results.push({
                        opponent: opponent,
                        score: `${mongolzScore} - ${opponentScore}`,
                        event: event || 'Unknown Event',
                        date: date || '',
                        isWin: isWin
                    });
                }
            });

            return results;
        } catch (error) {
            console.error('Failed to fetch results:', error);
            return [];
        }
    },

    /**
     * Get team news from HLTV
     */
    async getTeamNews() {
        try {
            const html = await this.fetchWithProxy('https://www.hltv.org/news/archive?team=the-mongolz');
            const doc = this.parseHTML(html);

            const news = [];
            const newsElements = doc.querySelectorAll('.news-item, .article');

            newsElements.forEach((item, index) => {
                if (index >= 4) return; // Limit to 4 news items

                const title = item.querySelector('.newstext, .title, a')?.textContent?.trim();
                const date = item.querySelector('.newsrecent, .date')?.textContent?.trim();
                const link = item.querySelector('a')?.href || '';
                const excerpt = item.querySelector('.news-excerpt, .description')?.textContent?.trim() || '';

                if (title) {
                    news.push({
                        title: title,
                        date: date || 'Recent',
                        link: link,
                        excerpt: excerpt,
                        tag: 'News'
                    });
                }
            });

            // If no team-specific news, get general CS2 news
            if (news.length === 0) {
                const generalHtml = await this.fetchWithProxy('https://www.hltv.org/news');
                const generalDoc = this.parseHTML(generalHtml);
                const generalNews = generalDoc.querySelectorAll('.news-item, .standard-box');

                generalNews.forEach((item, index) => {
                    if (index >= 4) return;
                    const title = item.querySelector('.newstext, a')?.textContent?.trim();
                    const date = item.querySelector('.newsrecent')?.textContent?.trim();

                    if (title) {
                        news.push({
                            title: title,
                            date: date || 'Recent',
                            link: '',
                            excerpt: '',
                            tag: 'CS2 News'
                        });
                    }
                });
            }

            return news;
        } catch (error) {
            console.error('Failed to fetch news:', error);
            return [];
        }
    },

    /**
     * Get all data at once
     */
    async getAllData() {
        // Check if running from file:// protocol
        const isLocalFile = window.location.protocol === 'file:';

        if (isLocalFile) {
            console.warn('Running from local file - using fallback data. For live data, serve from a web server.');
            return this.getFallbackData();
        }

        try {
            const [ranking, teamDetails, upcomingMatches, recentResults, news] = await Promise.all([
                this.getTeamRanking(),
                this.getTeamDetails(),
                this.getUpcomingMatches(),
                this.getRecentResults(),
                this.getTeamNews()
            ]);

            // Check if we got any valid data
            const hasValidData = ranking || (upcomingMatches && upcomingMatches.length) || (recentResults && recentResults.length);

            if (!hasValidData) {
                console.warn('No valid data from API, using fallback');
                return this.getFallbackData();
            }

            return {
                ranking,
                roster: teamDetails?.roster || this.FALLBACK_DATA.roster,
                stats: teamDetails?.stats || {},
                upcomingMatches,
                recentResults,
                news,
                lastUpdated: new Date(),
                isLive: true
            };
        } catch (error) {
            console.error('Failed to fetch live data:', error);
            return this.getFallbackData();
        }
    },

    /**
     * Get fallback data when live fetch fails
     */
    getFallbackData() {
        return {
            ranking: this.FALLBACK_DATA.ranking,
            roster: this.FALLBACK_DATA.roster,
            stats: {},
            upcomingMatches: this.FALLBACK_DATA.upcomingMatches,
            recentResults: this.FALLBACK_DATA.recentResults,
            news: this.FALLBACK_DATA.news,
            lastUpdated: new Date(this.FALLBACK_DATA.lastFallbackUpdate),
            isLive: false,
            isFallback: true
        };
    }
};

/**
 * UI Update Functions
 */
const MongolzUI = {
    /**
     * Show loading state
     */
    showLoading(elementId) {
        const el = document.getElementById(elementId);
        if (el) {
            el.classList.add('loading');
            el.innerHTML = '<div class="loading-spinner"></div>';
        }
    },

    /**
     * Update ranking display
     */
    updateRanking(rankingData) {
        const rankingEl = document.getElementById('world-ranking');
        if (rankingEl && rankingData?.ranking) {
            rankingEl.textContent = `#${rankingData.ranking}`;
        }

        const pointsEl = document.getElementById('ranking-points');
        if (pointsEl && rankingData?.points) {
            pointsEl.textContent = rankingData.points;
        }
    },

    /**
     * Update upcoming matches
     */
    updateUpcomingMatches(matches) {
        const container = document.getElementById('upcoming-matches');
        if (!container || !matches.length) return;

        container.innerHTML = matches.map(match => {
            const dateObj = match.date || new Date(match.dateStr);
            const day = dateObj.getDate();
            const month = dateObj.toLocaleString('en', { month: 'long' });
            const time = dateObj.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' });

            return `
                <div class="schedule-item">
                    <div class="schedule-date">
                        <div class="schedule-day">${day}</div>
                        <div class="schedule-month">${month}</div>
                    </div>
                    <div class="schedule-match">
                        <div class="schedule-teams">The MongolZ vs ${match.opponent}</div>
                        <div class="schedule-event">${match.event}</div>
                    </div>
                    <div class="schedule-time">
                        <div class="schedule-hour">${time}</div>
                        <div class="schedule-timezone">Local</div>
                    </div>
                </div>
            `;
        }).join('');
    },

    /**
     * Update next match banner
     */
    updateNextMatch(matches) {
        if (!matches || !matches.length) return;

        const nextMatch = matches[0];
        const opponentEl = document.getElementById('next-opponent-name');
        const eventEl = document.getElementById('next-match-event');
        const timeEl = document.getElementById('next-match-time');

        if (opponentEl) opponentEl.textContent = nextMatch.opponent;
        if (eventEl) eventEl.textContent = nextMatch.event;

        if (timeEl && nextMatch.date) {
            const dateObj = nextMatch.date;
            timeEl.textContent = dateObj.toLocaleDateString('en', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
    },

    /**
     * Update recent results
     */
    updateRecentResults(results) {
        const container = document.getElementById('recent-results');
        if (!container || !results.length) return;

        container.innerHTML = results.slice(0, 5).map(result => `
            <div class="result-item">
                <div class="result-status ${result.isWin ? 'win' : 'loss'}">
                    ${result.isWin ? 'WIN' : 'LOSS'}
                </div>
                <div class="result-info">
                    <div class="result-teams">The MongolZ vs ${result.opponent}</div>
                    <div class="result-event">${result.event}</div>
                </div>
                <div class="result-score">${result.score}</div>
            </div>
        `).join('');
    },

    /**
     * Update roster
     */
    updateRoster(roster) {
        const container = document.getElementById('team-roster');
        if (!container || !roster.length) return;

        // Known player data for enrichment
        const knownPlayers = {
            'blitz': { realName: 'Garidmagnai Byambasuren', role: 'IGL', roleClass: 'igl', hltvId: '18068' },
            'techno4k': { realName: 'Sodbayar Munkhbold', role: 'Rifler', roleClass: '', hltvId: '20641' },
            'techno': { realName: 'Sodbayar Munkhbold', role: 'Rifler', roleClass: '', hltvId: '20641' },
            '910': { realName: 'Usukhbayar Banzragch', role: 'AWPer', roleClass: 'awp', hltvId: '20308' },
            'mzinho': { realName: 'Ayush Batbold', role: 'Rifler', roleClass: '', hltvId: '22977' },
            'cobrazera': { realName: 'Anarbileg Uuganbayar', role: 'Rifler', roleClass: '', hltvId: '29438' }
        };

        const emojis = {
            'blitz': '🎯',
            'techno4k': '⚡',
            'techno': '⚡',
            '910': '🎯',
            'mzinho': '💫',
            'cobrazera': '🐍'
        };

        container.innerHTML = roster.map((player, index) => {
            const lowerNick = player.nickname?.toLowerCase() || '';
            const knownData = knownPlayers[lowerNick] || {};
            const emoji = emojis[lowerNick] || '🎮';

            return `
                <div class="player-card" onclick="showPlayerModal('${lowerNick}')">
                    <div class="player-avatar">${emoji}</div>
                    <div class="player-name">${player.nickname}</div>
                    <div class="player-real-name">${knownData.realName || player.realName || ''}</div>
                    <span class="player-role ${knownData.roleClass || ''}">${knownData.role || player.role || 'Player'}</span>
                </div>
            `;
        }).join('');
    },

    /**
     * Update news
     */
    updateNews(news) {
        const container = document.getElementById('news-grid');
        if (!container || !news.length) return;

        const icons = ['🏆', '⭐', '📈', '🎮'];

        container.innerHTML = news.map((item, index) => `
            <article class="news-card">
                <div class="news-image">${icons[index % icons.length]}</div>
                <div class="news-content">
                    <span class="news-tag">${item.tag}</span>
                    <h3 class="news-title">${item.title}</h3>
                    <p class="news-excerpt">${item.excerpt || 'Click to read more about this story.'}</p>
                    <span class="news-date">${item.date}</span>
                </div>
            </article>
        `).join('');
    },

    /**
     * Update last refresh time
     */
    updateLastRefresh() {
        const el = document.getElementById('last-updated');
        if (el) {
            el.textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
        }
    },

    /**
     * Show error state
     */
    showError(message) {
        const errorEl = document.getElementById('api-error');
        if (errorEl) {
            errorEl.style.display = 'block';
            errorEl.textContent = message;
        }
    },

    /**
     * Hide error state
     */
    hideError() {
        const errorEl = document.getElementById('api-error');
        if (errorEl) {
            errorEl.style.display = 'none';
        }
    }
};

/**
 * Initialize and load data
 */
async function initMongolzData() {
    console.log('Loading MongolZ data...');
    MongolzUI.hideError();

    try {
        const data = await MongolzAPI.getAllData();
        console.log('Data loaded:', data);

        // Update all UI elements with actual data
        if (data.ranking) {
            MongolzUI.updateRanking(data.ranking);
        }

        if (data.upcomingMatches?.length) {
            MongolzUI.updateUpcomingMatches(data.upcomingMatches);
            MongolzUI.updateNextMatch(data.upcomingMatches);
        }

        if (data.recentResults?.length) {
            MongolzUI.updateRecentResults(data.recentResults);
        }

        if (data.roster?.length) {
            MongolzUI.updateRoster(data.roster);
        }

        if (data.news?.length) {
            MongolzUI.updateNews(data.news);
        }

        // Update status indicator
        MongolzUI.updateLastRefresh();

    } catch (error) {
        console.error('Failed to load data:', error);
        MongolzUI.showError('Unable to load data. Please refresh the page.');
    }
}

// Auto-refresh every 5 minutes
let refreshInterval = null;

function startAutoRefresh() {
    // Initial load
    initMongolzData();

    // Refresh every 5 minutes
    refreshInterval = setInterval(initMongolzData, 5 * 60 * 1000);
}

function stopAutoRefresh() {
    if (refreshInterval) {
        clearInterval(refreshInterval);
        refreshInterval = null;
    }
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAutoRefresh);
} else {
    startAutoRefresh();
}

// Pause refresh when page is hidden, resume when visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoRefresh();
    } else {
        startAutoRefresh();
    }
});
