// Defender Dashboard JavaScript

// Update date and time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    
    const dateTimeString = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').textContent = dateTimeString;
}

// Check network status with real connectivity test
function checkNetworkStatus() {
    const networkStatus = document.getElementById('networkStatus');
    const networkText = document.getElementById('networkText');
    
    function setOnline() {
        networkStatus.classList.remove('offline', 'testing');
        networkText.textContent = 'Online';
        networkStatus.querySelector('i').className = 'fas fa-wifi';
        console.log('✅ NETWORK: ONLINE');
    }
    
    function setOffline() {
        networkStatus.classList.remove('testing');
        networkStatus.classList.add('offline');
        networkText.textContent = 'Offline';
        networkStatus.querySelector('i').className = 'fas fa-exclamation-triangle';
        console.log('❌ NETWORK: OFFLINE');
    }
    
    function setTesting() {
        networkStatus.classList.remove('offline');
        networkStatus.classList.add('testing');
        networkText.textContent = 'Testing...';
        networkStatus.querySelector('i').className = 'fas fa-spinner fa-spin';
        console.log('🔄 NETWORK: TESTING');
    }
    
    function testNetwork() {
        setTesting();
        const testTime = Date.now();
        console.log(`🧪 Network test #${testTime} started at ${new Date().toLocaleTimeString()}`);
        
        let testCompleted = false;
        
        // Try both Fetch API and Image loading for maximum reliability
        Promise.race([
            // Method 1: Fetch API
            fetch(`https://www.google.com/favicon.ico?t=${testTime}`, {
                method: 'HEAD',
                mode: 'no-cors',
                cache: 'no-store',
                signal: AbortSignal.timeout(2000)
            }).then(() => {
                console.log('📶 Network test: Fetch Success - ONLINE');
                return 'online';
            }).catch(error => {
                console.log('💥 Network test: Fetch Failed -', error.message);
                throw error;
            }),
            
            // Method 2: Image loading fallback
            new Promise((resolve, reject) => {
                const img = new Image();
                const timeout = setTimeout(() => {
                    reject(new Error('Image timeout'));
                }, 2000);
                
                img.onload = () => {
                    clearTimeout(timeout);
                    console.log('📶 Network test: Image Success - ONLINE');
                    resolve('online');
                };
                
                img.onerror = () => {
                    clearTimeout(timeout);
                    reject(new Error('Image failed'));
                };
                
                img.src = `https://httpbin.org/status/200?t=${testTime}`;
            })
        ])
        .then(result => {
            if (!testCompleted) {
                testCompleted = true;
                console.log('✅ Network test: SUCCESS - ONLINE');
                setTimeout(setOnline, 500);
            }
        })
        .catch(error => {
            if (!testCompleted) {
                testCompleted = true;
                console.log('❌ Network test: ALL METHODS FAILED - OFFLINE');
                setTimeout(setOffline, 500);
            }
        });
        
        // Final timeout safety net
        setTimeout(() => {
            if (!testCompleted) {
                testCompleted = true;
                console.log('⏰ Network test: Final timeout - OFFLINE');
                setOffline();
            }
        }, 5000);
    }
    
    // Run the test
    testNetwork();
}

// Simulated cybersecurity news feed
const cybersecurityNews = [
    "🔒 NIST releases new cybersecurity framework update focusing on supply chain security",
    "⚠️ Critical vulnerability discovered in popular open-source logging library",
    "🛡️ New ransomware family targeting healthcare organizations detected",
    "📊 Global cybersecurity spending expected to reach $188 billion in 2023",
    "🔍 Zero-day exploit in widely used VPN software patched by vendors",
    "🚨 State-sponsored APT group launches sophisticated phishing campaign",
    "💼 Major cloud provider enhances security controls following data breach",
    "🔐 Multi-factor authentication adoption increases by 65% in enterprise environments",
    "⭐ CISA releases new incident response playbook for critical infrastructure",
    "🌐 International cybersecurity cooperation framework signed by 15 countries",
    "🔧 New open-source threat intelligence platform launches with community support",
    "📈 Cybersecurity insurance claims surge 40% amid rising attack frequency",
    "🎯 Advanced persistent threat targeting financial institutions neutralized",
    "🔄 Security automation tools reduce incident response time by 50%",
    "🛠️ Major security vendor releases AI-powered threat detection platform"
];

// Update news ticker
function updateNewsTicker() {
    const newsItems = document.getElementById('newsItems');
    let currentIndex = 0;
    
    function showNextNews() {
        const newsItem = cybersecurityNews[currentIndex];
        newsItems.textContent = newsItem;
        currentIndex = (currentIndex + 1) % cybersecurityNews.length;
    }
    
    // Show first news item immediately
    showNextNews();
    
    // Update every 15 seconds
    setInterval(showNextNews, 15000);
}

// Add smooth scrolling for any internal links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add keyboard navigation for cards
function addKeyboardNavigation() {
    const cards = document.querySelectorAll('.category-card');
    let currentCardIndex = -1;
    
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'ArrowRight':
                    e.preventDefault();
                    currentCardIndex = (currentCardIndex + 1) % cards.length;
                    cards[currentCardIndex].focus();
                    cards[currentCardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    currentCardIndex = currentCardIndex <= 0 ? cards.length - 1 : currentCardIndex - 1;
                    cards[currentCardIndex].focus();
                    cards[currentCardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    break;
            }
        }
    });
    
    // Make cards focusable
    cards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('focus', () => {
            currentCardIndex = index;
        });
    });
}

// Add search functionality
function addSearchFunctionality() {
    // Create search input
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" id="searchInput" placeholder="Search cybersecurity resources..." />
            <button id="clearSearch" class="clear-btn" style="display: none;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add search styles
    const searchStyles = `
        <style>
        .search-container {
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
        }
        .search-box {
            position: relative;
            max-width: 500px;
            width: 100%;
        }
        .search-box i {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: #8b949e;
        }
        #searchInput {
            width: 100%;
            padding: 0.8rem 1rem 0.8rem 2.5rem;
            background: rgba(22, 27, 34, 0.8);
            border: 1px solid #30363d;
            border-radius: 8px;
            color: #e0e6ed;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        #searchInput:focus {
            outline: none;
            border-color: #58a6ff;
            box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1);
        }
        .clear-btn {
            position: absolute;
            right: 0.5rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #8b949e;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 4px;
        }
        .clear-btn:hover {
            background: rgba(248, 81, 73, 0.1);
            color: #f85149;
        }
        .category-card.hidden {
            display: none;
        }
        .highlight {
            background: rgba(255, 235, 59, 0.3);
            padding: 0.1rem 0.2rem;
            border-radius: 2px;
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', searchStyles);
    document.querySelector('.container').insertBefore(searchContainer, document.querySelector('.categories-grid'));
    
    // Add quick links navigation after search
    addQuickLinksNavigation();
    
    const searchInput = document.getElementById('searchInput');
    const clearButton = document.getElementById('clearSearch');
    const cards = document.querySelectorAll('.category-card');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm) {
            clearButton.style.display = 'block';
        } else {
            clearButton.style.display = 'none';
        }
        
        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardHtml = card.innerHTML;
            
            if (cardText.includes(searchTerm)) {
                card.classList.remove('hidden');
                // Highlight matching text
                if (searchTerm) {
                    const regex = new RegExp(`(${searchTerm})`, 'gi');
                    const links = card.querySelectorAll('a');
                    links.forEach(link => {
                        const originalText = link.textContent;
                        link.innerHTML = originalText.replace(regex, '<span class="highlight">$1</span>');
                    });
                }
            } else {
                card.classList.add('hidden');
            }
        });
        
        if (!searchTerm) {
            // Remove all highlights
            cards.forEach(card => {
                const links = card.querySelectorAll('a');
                links.forEach(link => {
                    link.innerHTML = link.textContent;
                });
            });
        }
    });
    
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
    });
}

// Add performance monitoring
function addPerformanceMonitoring() {
    // Monitor page load time
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Defender Dashboard loaded in ${Math.round(loadTime)}ms`);
    });
    
    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
                console.log('Navigation timing:', entry);
            }
        }
    });
    observer.observe({ entryTypes: ['navigation'] });
}

// Add quick links navigation
function addQuickLinksNavigation() {
    const quickLinksContainer = document.createElement('div');
    quickLinksContainer.className = 'quick-links-container';
    
    const quickLinks = [
        { id: 'network-security', icon: 'fas fa-network-wired', text: 'Network' },
        { id: 'threat-intelligence', icon: 'fas fa-search', text: 'Threats' },
        { id: 'incident-response', icon: 'fas fa-exclamation-triangle', text: 'Incidents' },
        { id: 'vulnerability-management', icon: 'fas fa-bug', text: 'Vulns' },
        { id: 'identity-access-management', icon: 'fas fa-user-shield', text: 'Identity' },
        { id: 'security-operations', icon: 'fas fa-chart-line', text: 'SecOps' },
        { id: 'cloud-security', icon: 'fas fa-cloud', text: 'Cloud' },
        { id: 'compliance-governance', icon: 'fas fa-clipboard-check', text: 'Compliance' }
    ];
    
    quickLinksContainer.innerHTML = `
        <div class="quick-links">
            <div class="quick-links-header">
                <i class="fas fa-bolt"></i>
                <span>Quick Jump</span>
            </div>
            <div class="quick-links-buttons">
                ${quickLinks.map(link => `
                    <a href="#${link.id}" class="quick-link-btn" data-target="${link.id}">
                        <i class="${link.icon}"></i>
                        <span>${link.text}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add quick links styles
    const quickLinksStyles = `
        <style>
        .quick-links-container {
            margin-bottom: 2rem;
        }
        .quick-links {
            background: rgba(22, 27, 34, 0.9);
            border: 1px solid #30363d;
            border-radius: 12px;
            padding: 1rem;
            backdrop-filter: blur(10px);
        }
        .quick-links-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            color: #58a6ff;
            font-weight: 600;
            font-size: 0.9rem;
        }
        .quick-links-header i {
            color: #f85149;
        }
        .quick-links-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
        }
        .quick-link-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 1rem;
            background: rgba(88, 166, 255, 0.1);
            border: 1px solid rgba(88, 166, 255, 0.3);
            border-radius: 6px;
            color: #e0e6ed;
            text-decoration: none;
            font-size: 0.85rem;
            transition: all 0.2s ease;
            min-width: 100px;
            justify-content: center;
        }
        .quick-link-btn:hover {
            background: rgba(88, 166, 255, 0.2);
            border-color: #58a6ff;
            color: #58a6ff;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(88, 166, 255, 0.15);
        }
        .quick-link-btn i {
            font-size: 0.9rem;
        }
        .quick-link-btn.active {
            background: rgba(46, 160, 67, 0.2);
            border-color: #2ea043;
            color: #2ea043;
        }
        
        @media (max-width: 768px) {
            .quick-links-buttons {
                justify-content: flex-start;
            }
            .quick-link-btn {
                min-width: auto;
                flex: 1;
                min-width: calc(50% - 0.25rem);
            }
        }
        
        @media (max-width: 480px) {
            .quick-link-btn {
                min-width: calc(50% - 0.25rem);
                font-size: 0.8rem;
                padding: 0.5rem 0.75rem;
            }
            .quick-link-btn span {
                display: none;
            }
            .quick-link-btn {
                min-width: auto;
                width: auto;
                flex: none;
            }
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', quickLinksStyles);
    
    // Insert after search container
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.parentNode.insertBefore(quickLinksContainer, searchContainer.nextSibling);
    } else {
        // Fallback: insert before categories grid
        document.querySelector('.container').insertBefore(quickLinksContainer, document.querySelector('.categories-grid'));
    }
    
    // Add click handlers for smooth scrolling and active states
    document.querySelectorAll('.quick-link-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            document.querySelectorAll('.quick-link-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Scroll to target
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active button on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const scrollPosition = window.scrollY + headerHeight + 100;
            
            const sections = quickLinks.map(link => document.getElementById(link.id)).filter(el => el);
            let activeSection = null;
            
            sections.forEach(section => {
                if (section.offsetTop <= scrollPosition) {
                    activeSection = section;
                }
            });
            
            if (activeSection) {
                document.querySelectorAll('.quick-link-btn').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-target') === activeSection.id) {
                        btn.classList.add('active');
                    }
                });
            }
        }, 100);
    });
}

// Add error handling for external links
function addLinkErrorHandling() {
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function(e) {
            try {
                // Log the link click for analytics
                console.log('External link clicked:', this.href);
            } catch (error) {
                console.error('Error tracking link click:', error);
            }
        });
    });
}


// Initialize dashboard
function initDashboard() {
    console.log('🚀 Starting Defender Dashboard initialization...');
    
    try {
        // Update date/time immediately and then every second
        updateDateTime();
        setInterval(updateDateTime, 1000);
        console.log('✅ Date/time initialized');
        
        // Check network status immediately and on network events
        checkNetworkStatus();
        window.addEventListener('online', checkNetworkStatus);
        window.addEventListener('offline', checkNetworkStatus);
        
        // Periodically test network connectivity (every 30 seconds)
        setInterval(checkNetworkStatus, 30000);
        console.log('✅ Network status checks initialized');
        
        // Start news ticker
        updateNewsTicker();
        console.log('✅ News ticker initialized');
        
        // Add interactive features
        addSmoothScrolling();
        addKeyboardNavigation();
        addSearchFunctionality();
        addPerformanceMonitoring();
        addLinkErrorHandling();
        console.log('✅ Interactive features initialized');
        
        
        // Add loading indicator removal
        document.body.classList.add('loaded');
        
        console.log('🛡️ Defender Dashboard initialized successfully');
    } catch (error) {
        console.error('❌ Error during dashboard initialization:', error);
    }
}


// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
} else {
    initDashboard();
}

// Add service worker for offline capability (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the next line if you want to add a service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateDateTime,
        checkNetworkStatus,
        updateNewsTicker
    };
}
