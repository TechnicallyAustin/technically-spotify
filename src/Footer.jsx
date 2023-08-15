import React from 'react'

export default function Footer() {
    return (
      <footer className="w-full h-screen relative block p-4 py-10 border-t border-text-color">
     
          <div id="footerLinks" className='flex flex-col justify-around gap-4 py-4'>
            <ul id="company" className='py-2 flex flex-col gap-2 text-text-color'>
              <li>
                <p className="font-bold text-page-white">Company</p>
              </li>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>

            <ul id="communities" className='py-2 flex flex-col gap-2 text-text-color'>
              <li>
                <p className="font-bold text-page-white">Communities</p>
              </li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>

            <ul id="usefulLinks" className='py-2 flex flex-col justify-around gap-2 text-text-color'>
              <li className=''>
                <p className="font-bold text-page-white">Useful Links</p>
              </li>
              <li className=''>Support</li>
              <li className=''>Free Mobile App</li>
            </ul>

            <ul id="socialLinks" className='flex justify-start items-center gap-2 py-2'>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Github</li>
            </ul>
          </div>

          <div id="legalLinks" className="w-full flex flex-col justify-around items-start gap-6 py-6 text-xs">

            <ul  id="legal" className='flex flex-wrap justify-start items-center gap-2'>
              <li className='pr-2 text-xs'>Legal</li>
              <li className='pr-2 text-xs'>Privacy Center</li>
              <li className='pr-2 text-xs'>Privacy Policy</li>
              <li className='pr-2 text-xs'>Cookies</li>
              <li className='pr-2 text-xs'>About Ads</li>
              <li className='pr-2 text-xs'>Accessibility</li>
              <li className='pr-2 text-xs'>Notice at Collection</li>
              <li className='pr-2 text-xs'>Your Privacy Choices</li>
            </ul>

            <div id="copyright" className='w-full'>
              <p>Copyright Info</p>
            </div>

            <div id="language" className='w-full'>
              <button id="languageSelector" className='px-6 p-2 border rounded-3xl'>English</button>
            </div>

          </div>


      </footer>
    );
}
