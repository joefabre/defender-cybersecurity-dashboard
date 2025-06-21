// Simple test script
console.log('🚀 Simple script loaded');

// Basic function to test terminal
function testTerminal() {
    console.log('🧪 testTerminal function called');
    
    const terminal = document.getElementById('networkTerminal');
    console.log('Terminal element:', terminal);
    
    if (!terminal) {
        alert('❌ Terminal element not found!');
        return;
    }
    
    terminal.innerHTML = '<div class="terminal-line success">✅ Manual test works! Time: ' + new Date().toLocaleTimeString() + '</div>';
    alert('✅ Terminal test completed - check the terminal!');
}

// Simple initialization
function simpleInit() {
    console.log('🔧 Simple initialization starting...');
    
    // Just try to find the terminal element
    const terminal = document.getElementById('networkTerminal');
    if (terminal) {
        console.log('✅ Terminal element found during init');
        terminal.innerHTML = '<div class="terminal-line">Simple script initialized at: ' + new Date().toLocaleTimeString() + '</div>';
    } else {
        console.log('❌ Terminal element NOT found during init');
    }
}

// Initialize when ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Content Loaded');
    simpleInit();
});

// Also try immediate init
console.log('⚡ Attempting immediate init...');
if (document.readyState !== 'loading') {
    simpleInit();
}
