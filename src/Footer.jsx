import React from 'react'

export default function Footer() {
    return (
      <footer className="w-full block  px-4 relative top-20">
        <div
          id="footerContent"
          className="w-full flex flex-col justify-start items-start "
        >
          <div id="footerLinks">
            <ul>
              <li>
                <p>Company</p>
              </li>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>

            <ul>
              <li>
                <p>Communities</p>
              </li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>

            <ul>
              <li>
                <p>Useful Links</p>
              </li>
              <li>Support</li>
              <li>Free Mobile App</li>
            </ul>

            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Github</li>
            </ul>
          </div>

          <div id="legalLinks">
            <ul>
              <li>Legal</li>
              <li>Privacy Center</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>About Ads</li>
              <li>Accessibility</li>
              <li>Notice at Collection</li>
              <li>Your Privacy Choices</li>
            </ul>
          </div>

          <div id="copyright">
            <p>Copyright Info</p>
          </div>

          <div id="footerLanguage">
            <button id="languageSelector">English</button>
          </div>
        </div>
      </footer>
    );
}
