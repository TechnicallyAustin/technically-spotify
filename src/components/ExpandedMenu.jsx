import React from 'react'

export default function ExpandedMenu(props) {
      const { toggle, status } = props;
      console.log("props", toggle);

      const handleClick = () => {
        toggle();
        console.log("Clicked");
      };

    return (
      <nav
        id="expandedNav"
        className="flex  justify-start items-start text-lg"
      >
        <div
          id="expandedMenu"
          className="w-full h-full shadow-lg z-10 p-6 bg-page-color text-text-color  fixed  border-b  left-0 top-20 flex flex-col justify-start gap-8 items-start"
        >
            <div id="userControls" className='w-full flex flex-col justify-around items-start gap-4 text-2xl'>
                <p>Log in</p>
                <p>Sign up</p>
            </div>
                
            <div id="pageBreak" className='w-full p-0.5 bg-text-color'></div>

            <ul id="applicationLinks" className='w-full flex flex-col justify-around items-start gap-4'>
              <li>Premium</li>
              <li>Help</li>
              <li>Download</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>

        </div>
      </nav>
    );
}
