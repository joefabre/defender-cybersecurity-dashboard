// Simple, working network detection
function simpleNetworkCheck() {
    const networkStatus = document.getElementById('networkStatus');
    const networkText = document.getElementById('networkText');
    
    function setOnline() {
        networkStatus.classList.remove('offline', 'testing');
        networkText.textContent = 'Online';
        networkStatus.querySelector('i').className = 'fas fa-wifi';
        console.log('✅ ONLINE');
    }
    
    function setOffline() {
        networkStatus.classList.remove('testing');
        networkStatus.classList.add('offline');
        networkText.textContent = 'Offline';
        networkStatus.querySelector('i').className = 'fas fa-exclamation-triangle';
        console.log('❌ OFFLINE');
    }
    
    function setTesting() {
        networkStatus.classList.remove('offline');
        networkStatus.classList.add('testing');
        networkText.textContent = 'Testing...';
        networkStatus.querySelector('i').className = 'fas fa-spinner fa-spin';
        console.log('🔄 TESTING');
    }
    
    function testNetwork() {
        setTesting();
        const testTime = Date.now();
        console.log(`🧪 Test started at ${new Date().toLocaleTimeString()}`);
        
        // Create a new image element for testing
        const img = new Image();
        let finished = false;
        
        // Success handler
        img.onload = function() {
            if (!finished) {
                finished = true;
                console.log('📶 Image loaded successfully');
                setTimeout(setOnline, 500); // Keep testing visible for 500ms
            }
        };
        
        // Error handler
        img.onerror = function() {
            if (!finished) {
                finished = true;
                console.log('💥 Image failed to load');
                setTimeout(setOffline, 500); // Keep testing visible for 500ms
            }
        };
        
        // Timeout handler
        setTimeout(() => {
            if (!finished) {
                finished = true;
                console.log('⏰ Test timed out');
                setOffline();
            }
        }, 2000);
        
        // Start the test with a unique URL
        const testUrl = `https://www.google.com/favicon.ico?test=${testTime}`;
        console.log(`🔗 Testing: ${testUrl}`);
        img.src = testUrl;
    }
    
    // Test immediately
    testNetwork();
    
    // Test every 3 seconds
    setInterval(testNetwork, 3000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Starting simple network detection...');
    simpleNetworkCheck();
});
