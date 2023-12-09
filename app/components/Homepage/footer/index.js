import React from 'react'

const Footer = () => {
  return (
      <div id="FooterdesktopRoot" className="flex flex-col gap-px w-full items-start">
  <div id="Footerbg" className="bg-[#272727] flex flex-col gap-4 w-full h-[383px] items-start pl-40 py-16" >
    <div id="Separator" className="border-solid border-t-2 border-white w-5/6 h-px rounded-none" />
    <div className="flex flex-row justify-between mb-0 w-4/5 items-start">
      <div className="flex flex-col gap-2 w-1/4 items-start">
        <div className="flex flex-row gap-3 w-full items-start">
          <img src="https://file.rendit.io/n/b2jqevnj8BH5uICGSk3m.svg" alt="Icon" id="Icon" className="w-16" />
          <img src="https://file.rendit.io/n/zQdo8aKJChl1dzOf6Xuq.svg" alt="Wordmark" id="Wordmark" className="mt-4" />
        </div>
        <div id="Description" className="font-['Poppins'] tracking-[-0.5] leading-[22.8px] text-white w-full" >
          Your natural candle made for your home and for your wellness.
        </div>
      </div>
      <div className="flex flex-col mt-6 gap-5 w-2/5 items-start">
        <div className="flex flex-row justify-between w-4/5 items-start">
          <div className="flex flex-row gap-px w-3/5 items-start">
            <button id="Titlecol2" className="font-['Avenir'] font-medium leading-[28.8px] text-[#56b280] w-3/4" >
              Discovery
            </button>
            <button id="Titlecol1" className="font-['Poppins'] font-medium leading-[28.8px] text-[#56b280]" >
              About
            </button>
          </div>
          <button id="Titlecol" className="font-['Poppins'] font-medium leading-[28.8px] text-[#56b280]" >
            Info
          </button>
        </div>
        <div className="flex flex-row gap-12 w-full items-start">
          <div className="flex flex-col gap-4 w-1/4 items-start">
            <button id="Item8" className="font-['Poppins'] font-medium leading-[28.8px] text-[#e1e1e1] ml-px" >
              New season
            </button>
            <button id="Item7" className="font-['Poppins'] font-medium leading-[28.8px] text-[#e1e1e1]" >
              Most searched
            </button>
            <button id="Most searched" className="font-['Poppins'] font-medium leading-[28.8px] text-[#e1e1e1]" >
              Most selled
            </button>
          </div>
          
          <div className="flex flex-col gap-4 w-3/5 items-start">
            <div className="flex flex-row ml-px gap-px w-5/6 items-start">
              <button id="Item5" className="font-['Avenir'] font-medium leading-[28.8px] text-[#e1e1e1] w-2/3" >
                Help
              </button>
              <button id="Item2" className="font-['Poppins'] font-medium leading-[28.8px] text-[#e1e1e1]" >
                Contact us
              </button>
            </div>
            <div className="flex flex-row gap-24 w-full items-start">
              <button id="Item4" className="font-['Poppins'] font-medium leading-[28.8px] text-[#e1e1e1]" >
                Shipping
              </button>             
              <button id="Item1" className="font-['Poppins'] font-medium leading-[28.8px] text-[#e1e1e1]" >
                Privacy Policies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>

      <div id="Bg" className="bg-yellow flex flex-row justify-between w-full h-10 items-start pl-40 pr-56" >

        <div className="font-['Poppins'] leading-[28px] text-[#5e6e89] mt-px">
          ©Candleaf All Rights Reserved.
        </div>

        <button id="DesignedWithByUxbly1" className="text-right font-['Poppins'] leading-[28px] text-[#5e6e89] mt-px" >
          Designed with ❤️ by <span className="font-medium">uxbly</span>
        </button>
      </div>
    </div>

  )
}

export default Footer
