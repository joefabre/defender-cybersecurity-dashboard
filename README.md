# 🛡️ Defender - Cybersecurity Dashboard

A comprehensive cybersecurity resource dashboard with real-time network monitoring, search functionality, and quick navigation. Built by **FABREulous Technology**.

![Defender Dashboard](https://img.shields.io/badge/Status-Active-brightgreen) ![Version](https://img.shields.io/badge/Version-v1.0.0-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### 🏠 **Header**
- **Live Date & Time** - Real-time clock display
- **Network Status Indicator** - Real connectivity testing every 30 seconds
- **Professional Branding** - Clean, modern design

### 🔍 **Search Functionality**
- **Real-time Search** - Filter cybersecurity resources as you type
- **Highlighted Results** - Visual highlighting of matching terms
- **Clear Function** - Quick reset with clear button

### ⚡ **Quick Jump Navigation**
- **8 Category Buttons** - Instant navigation to any section
- **Smart Highlighting** - Shows current section as you scroll
- **Smooth Scrolling** - Elegant transitions between sections
- **Responsive Design** - Adapts to all screen sizes

### 📋 **8 Cybersecurity Categories**

1. **🔗 Network Security**
   - Firewall Management (pfSense, Cisco, FortiGate)
   - Network Monitoring (Wireshark, Nmap, Nagios)
   - VPN & Remote Access (OpenVPN, WireGuard, strongSwan)

2. **🔍 Threat Intelligence**
   - Threat Feeds (Malwarebytes Labs, Threatpost, VirusTotal)
   - IOC Analysis (AlienVault OTX, Hybrid Analysis, Shodan)
   - Research & Reports (MITRE ATT&CK, FireEye, CrowdStrike)

3. **⚠️ Incident Response**
   - Frameworks & Playbooks (SANS, NIST, CISA)
   - Forensic Tools (Sleuth Kit, Volatility, Kali Linux)
   - Communication & Reporting (US-CERT, FIRST, ENISA)

4. **🐛 Vulnerability Management**
   - Scanning & Assessment (Nessus, OpenVAS, Rapid7)
   - CVE Databases (NVD, CVE Program, Exploit-DB)
   - Patch Management (Windows Update, Red Hat, Ubuntu)

5. **👤 Identity & Access Management**
   - Authentication (Azure AD, Okta, FreeIPA)
   - Multi-Factor Authentication (Authy, YubiKey, Duo)
   - Privileged Access (CyberArk, BeyondTrust, HashiCorp Vault)

6. **📊 Security Operations**
   - SIEM & Logging (Splunk, Elastic Security, IBM QRadar)
   - SOAR Platforms (Splunk Phantom, Demisto, Swimlane)
   - Threat Hunting (CrowdStrike Falcon, VMware Carbon Black)

7. **☁️ Cloud Security**
   - AWS Security (Security Center, GuardDuty, Config)
   - Azure Security (Security Center, Sentinel, Key Vault)
   - Container Security (Docker, Kubernetes, Twistlock)

8. **📋 Compliance & Governance**
   - Frameworks (ISO 27001, PCI DSS, NIST)
   - Regulations (GDPR, HIPAA, SOX)
   - Assessment Tools (CIS Benchmarks, Rapid7, Qualys)

### 📰 **Live News Ticker**
- **Rotating Cybersecurity News** - Latest security updates
- **Sticky Display** - Always visible while browsing
- **15-second Updates** - Fresh content rotation

### 📱 **Responsive Design**
- **Desktop** - Full feature layout
- **Tablet** - Optimized button sizing
- **Mobile** - Icon-only navigation, collapsed layout

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for external resource links

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/joefabre/defender-cybersecurity-dashboard.git
   cd defender-cybersecurity-dashboard
   ```

2. Open in your browser:
   ```bash
   open index.html
   ```
   Or simply double-click `index.html`

### Usage
- **Search**: Type in the search bar to filter resources
- **Navigate**: Click Quick Jump buttons to jump to sections
- **Keyboard**: Use Ctrl/Cmd + Arrow keys for card navigation
- **Network Status**: Monitor real-time connectivity in header

## 🛠️ Technical Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with flexbox/grid
- **Vanilla JavaScript** - No dependencies
- **Font Awesome** - Professional icons
- **Google Fonts** - Clean typography

## 📁 File Structure

```
defender/
├── index.html          # Main dashboard page
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
├── README.md          # Project documentation
├── debug.html         # Network testing utilities
├── terminal-test.html # Terminal debugging
└── minimal-test.html  # Basic functionality test
```

## 🎨 Design Philosophy

- **Dark Theme** - Easy on the eyes for long sessions
- **Professional** - Clean, modern cybersecurity aesthetic
- **Accessible** - Keyboard navigation and focus management
- **Responsive** - Works perfectly on all devices
- **Fast** - Lightweight with no external dependencies

## 🔧 Customization

### Adding New Resources
Edit `index.html` to add new links:
```html
<li><a href="your-link" target="_blank">Your Resource</a></li>
```

### Modifying Colors
Update CSS variables in `styles.css`:
```css
:root {
  --primary-blue: #58a6ff;
  --success-green: #2ea043;
  --error-red: #f85149;
}
```

### Custom News Items
Edit the `cybersecurityNews` array in `script.js`:
```javascript
const cybersecurityNews = [
    "Your custom news item here",
    // ... more items
];
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**FABREulous Technology**
- GitHub: [@joefabre](https://github.com/joefabre)

## 🙏 Acknowledgments

- Font Awesome for the excellent icon library
- All the cybersecurity organizations providing these valuable resources
- The open-source security community

## 📊 Version History

- **v1.0.0** (2025-06-21)
  - Initial release
  - Complete dashboard with 8 cybersecurity categories
  - Real-time network monitoring
  - Search and quick navigation
  - Responsive design
  - News ticker functionality

---

**© 2025 by FABREulous Technology** | Built with ❤️ for the cybersecurity community
