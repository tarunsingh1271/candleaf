import React from 'react'

const Cartitems = () => {
  return (
    <div className="bg-white flex flex-col">

<div className="self-center flex w-full max-w-[1110px] flex-col mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div className="justify-center text-neutral-800 text-center text-2xl font-medium leading-[58px] tracking-tighter self-center max-w-[579px]">
          Your cart items
        </div>
        <button className="text-green-400 text-center text-lg leading-7 tracking-tighter underline self-center max-w-[376px] mt-11 max-md:mt-10">
          Back to shopping
        </button>
        <div className="self-stretch flex w-full justify-between gap-5 mt-16 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="text-neutral-800 text-base font-medium leading-7 tracking-tighter grow shrink basis-auto">
            Product
          </div>
          <div className="flex items-stretch justify-between gap-5 mt-1 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="text-neutral-800 text-base font-medium leading-7 tracking-tighter">
              Price
            </div>
            <div className="text-neutral-800 text-base font-medium leading-7 tracking-tighter">
              Quantity
            </div>
            <div className="text-neutral-800 text-right text-base font-medium leading-7 tracking-tighter self-start">
              Total
            </div>
          </div>
        </div>
        <div className="bg-neutral-200 self-stretch shrink-0 h-1.5 mt-4 max-md:max-w-full" />
        <div className="self-stretch mt-9 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[37%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[1.23] object-contain object-center w-40 overflow-hidden shrink-0 max-w-full grow max-md:mt-8"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[63%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch mt-1 max-md:mt-9">
                      <div className="justify-center text-neutral-800 text-2xl font-medium leading-[58px] tracking-tighter">
                        Spiced Mint Candleaf®
                      </div>
                      <button className="text-green-400 text-lg leading-7 tracking-tighter underline mt-7">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-stretch justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                <div className="text-neutral-800 text-lg font-medium leading-7 tracking-tighter mt-11 max-md:mt-10">
                  $ 9.99
                </div>
                <div className="justify-center items-stretch bg-white flex grow basis-[0%] flex-col pt-8">
                  <div className="text-neutral-400 text-center text-lg leading-7 tracking-tighter whitespace-nowrap border border-[color:var(--green,#56B280)] justify-center items-stretch px-4 py-2.5 border-solid">
                    <span className="text-neutral-400">-</span>
                    <span className="text-zinc-800"> 1 </span>
                    <span className="text-green-400">+</span>
                  </div>
                </div>
                <div className="text-neutral-800 text-right text-lg font-medium leading-7 tracking-tighter mt-10 self-end">
                  $ 9.99
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-200 self-stretch shrink-0 h-1.5 mt-7 max-md:max-w-full" />
        <div className="flex w-[439px] max-w-full items-stretch justify-between gap-5 mt-11 self-end max-md:flex-wrap max-md:justify-center max-md:mt-10">
          <div className="text-neutral-800 text-xl font-medium leading-7 tracking-tighter whitespace-nowrap mt-1.5 self-start">
            Sub-total
          </div>
          <div className="text-neutral-800 text-right text-xl font-medium leading-7 tracking-tighter self-start">
            $ 9.99
          </div>
          <button className="text-white text-center text-xl font-medium whitespace-nowrap items-stretch rounded bg-green-400 grow justify-center px-11 py-2 max-md:px-5">
            Check-out
          </button>
        </div>
        <div className="text-neutral-400 text-right text-base leading-7 tracking-tighter max-w-[376px] mr-60 self-end max-md:mr-2.5">
          Tax and shipping cost will be calculated later
        </div>
      </div>
      
    </div>
  )
}

export default Cartitems
