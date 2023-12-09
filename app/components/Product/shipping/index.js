import React from 'react'

const Shipping = () => {
  return (
    <div>
       <div className="bg-white pl-20 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col mt-5 max-md:max-w-full max-md:mt-10">
            
            <div className="self-stretch flex items-center justify-between gap-2.5 mt-7 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-green-400 text-base font-medium leading-7 tracking-tighter whitespace-nowrap self-start">
                Cart
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a97e94ec2a1799547addc6460b3d643a5ed4b6b536331908f3410aed73b01a9?"
                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-green-400 text-base font-medium leading-7 tracking-tighter self-start">
                Details
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a97e94ec2a1799547addc6460b3d643a5ed4b6b536331908f3410aed73b01a9?"
                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-neutral-800 text-base font-medium leading-7 tracking-tighter self-start">
                Shipping
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/66d5214df8db7b5a84ce25e050844fd70ec5811b9f28080be09f5804e548b9ae?"
                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-zinc-600 text-base font-medium leading-7 tracking-tighter whitespace-nowrap self-start">
                Payment
              </div>
            </div>
            <div className="border self-stretch flex flex-col items-stretch mt-14 pl-5 pr-3.5 py-6 rounded-lg border-solid border-green-400 border-opacity-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
              <div className="flex w-full items-stretch justify-between gap-5">
                <div className="flex justify-between gap-2.5 items-start">
                  <div className="text-zinc-500 text-sm leading-4 tracking-tight whitespace-nowrap">
                    Contact
                  </div>
                  <div className="text-neutral-800 text-sm leading-4 tracking-tight self-stretch">
                    joe.spagnuolo@uxbly.com
                  </div>
                </div>
                <button className="text-green-400 text-center text-sm leading-4 tracking-tight grow whitespace-nowrap self-start">
                  Edit
                </button>
              </div>
              <div className="bg-green-400 bg-opacity-20 shrink-0 h-0.5 mt-5" />
              <div className="flex justify-between gap-3.5 mt-6 items-start max-md:justify-center">
                <div className="text-zinc-500 text-sm leading-4 tracking-tight self-stretch whitespace-nowrap">
                  Ship to
                </div>
                <div className="text-neutral-800 text-sm leading-4 tracking-tight self-stretch grow shrink basis-auto">
                  Via Firenze 23, 92023, Campobello di Licata AG, Italia
                </div>
                <button className="text-green-400 text-center text-sm leading-4 tracking-tight whitespace-nowrap">
                  Edit
                </button>
              </div>
            </div>
            <div className="text-neutral-800 text-xl font-medium leading-7 tracking-tighter self-stretch whitespace-nowrap mt-11 max-md:max-w-full max-md:mt-10">
              Shipping method
            </div>
            <div className="border border-neutral-200 self-stretch flex w-full items-stretch justify-between gap-5 mt-6 p-5 rounded-lg border-solid max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="flex justify-between gap-5 items-start">
                <div className="stroke-[3px] flex w-4 shrink-0 h-4 flex-col rounded-[50%]" />
                <div className="text-neutral-800 text-sm leading-4 mt-1">
                  Standard Shipping
                </div>
              </div>
              <div className="text-neutral-800 text-center text-sm font-bold leading-4 tracking-tighter self-center grow whitespace-nowrap my-auto">
                Free
              </div>
            </div>
            <div className="self-stretch flex items-center justify-between gap-5 mt-64 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <button className="text-green-400 text-lg leading-7 tracking-tighter underline my-auto">
                Back to details
              </button>
              <button className="text-white text-center text-xl font-medium whitespace-nowrap items-stretch rounded bg-green-400 self-stretch grow justify-center px-11 py-2 max-md:px-5">
                Go to payment
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-zinc-100 flex grow flex-col w-full pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="w-[411px] max-w-full mt-1.5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[1.2] object-contain object-center w-[163px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch mt-5 max-md:mt-10">
                    <div className="justify-center text-neutral-800 text-base font-medium leading-[58px] tracking-tighter">
                      Spiced Mint Candleaf®
                    </div>
                    <div className="justify-center text-green-400 text-xl font-semibold leading-[58px] tracking-tighter mt-6">
                      $ 9.99
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-400 bg-opacity-20 w-[410px] shrink-0 max-w-full h-0.5 mt-12 max-md:mt-10" />
            <div className="justify-center items-stretch flex w-[411px] max-w-full gap-2.5 mt-7">
              <div className="text-zinc-600 text-sm leading-7 tracking-tighter bg-white grow justify-center pl-4 pr-16 py-3.5 border-[0.5px] border-solid border-zinc-500 items-start max-md:pr-5">
                Coupon code
              </div>
              <div className="text-white text-center text-lg whitespace-nowrap justify-center items-stretch rounded bg-neutral-400 px-6 py-3.5 max-md:px-5">
                Add code
              </div>
            </div>
            <div className="bg-green-400 bg-opacity-20 w-[411px] shrink-0 max-w-full h-0.5 mt-7" />
            <div className="flex w-[411px] max-w-full justify-between gap-5 mt-5 items-start">
              <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="justify-end text-zinc-600 text-sm font-medium leading-7 tracking-tighter">
                  Subtotal
                </div>
                <div className="justify-end text-zinc-600 text-sm font-medium leading-7 tracking-tighter mt-7">
                  Shipping
                </div>
              </div>
              <div className="self-stretch flex grow basis-[0%] flex-col items-end">
                <div className="justify-end text-neutral-800 text-right text-sm font-medium leading-7 tracking-tighter">
                  $ 9.99
                </div>
                <div className="justify-end text-neutral-800 text-right text-sm font-medium leading-7 self-stretch mt-7">
                  Free Shipping
                </div>
              </div>
            </div>
            <div className="bg-green-400 bg-opacity-20 w-[411px] shrink-0 max-w-full h-0.5 mt-9" />
            <div className="flex w-[411px] max-w-full items-center justify-between gap-5 mt-4 mb-56 max-md:mb-10">
              <div className="justify-end text-zinc-600 text-sm font-medium leading-7 tracking-tighter my-auto">
                Total
              </div>
              <div className="justify-end text-neutral-800 text-right text-2xl font-medium leading-7 tracking-tighter">
                $ 9.99
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Shipping
