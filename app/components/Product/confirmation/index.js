import React from 'react'

const Payconf = () => {
  return (
    <div>
       <div className="bg-white pl-20 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col mt-5 max-md:max-w-full max-md:mt-10">

            <div className="flex items-center gap-2.5 mt-7 self-start max-md:justify-center">
              <button className="text-green-400 text-base font-medium leading-7 tracking-tighter whitespace-nowrap self-start">
                Cart
              </button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde1e75bbf9b76b13a57a814cdf6f5dac088919ad788458cdac459a7e57efe6d?"
                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <button className="text-green-400 text-base font-medium leading-7 tracking-tighter self-start">
                Details
              </button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c35a9d88a3f5a6451d48cb8a83df574cb00a19b8b424df1a5c2308f06157a52?"
                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <button className="text-green-400 text-base font-medium leading-7 tracking-tighter self-start">
                Shipping
              </button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c35a9d88a3f5a6451d48cb8a83df574cb00a19b8b424df1a5c2308f06157a52?"
                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <button className="text-neutral-800 text-base font-medium leading-7 tracking-tighter whitespace-nowrap self-start">
                Payment
              </button>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e281fac6505c47e3be3becf518cf18143249b7f96eb6f46f925bb9c0ca4079d?"
              className="aspect-square object-contain object-center w-[100px] overflow-hidden self-center max-w-full mt-14 max-md:mt-10"
            />
            <div className="justify-center text-neutral-800 text-center text-2xl font-medium leading-[58px] tracking-tighter self-center max-w-[375px] mt-6">
              Payment Confirmed
            </div>
            <div className="justify-center text-green-400 text-center text-sm leading-4 self-center mt-3.5">
              ORDER #2039
            </div>
            <div className="text-zinc-500 text-sm font-light leading-4 self-stretch mt-7 max-md:max-w-full">
              <span className="text-green-400"> </span>
              <span className="text-zinc-500">
                Thank you Joe for buying Candleaf. The nature is grateful to
                you. Now that your order is confirmed it will be ready to ship
                in 2 days. Please check your inbox in the future for your order
                updates.
              </span>
            </div>
            <button className="text-white text-center text-xl font-medium whitespace-nowrap items-stretch rounded bg-green-400 self-center justify-center mt-11 px-11 py-2 max-md:mt-10 max-md:px-5">
              Back to shopping
            </button>
            <button className="text-green-400 text-center text-lg leading-7 tracking-tighter underline mt-9">
              Print receipt
            </button>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
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
            <div className="bg-green-400 bg-opacity-20 w-[410px] shrink-0 max-w-full h-0.5 mt-36 max-md:mt-10" />
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
              <div className="justify-end text-green-400 text-sm font-medium leading-7 tracking-tighter my-auto">
                Paid
              </div>
              <div className="justify-end text-green-400 text-right text-2xl font-medium leading-7 tracking-tighter">
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

export default Payconf
