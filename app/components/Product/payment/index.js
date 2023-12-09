import React from 'react'

const Payment= () => {
  return (
    <div>
      <div className="bg-white flex flex-col pl-20 pb-12 max-md:pl-5">
      <div className="self-center w-full max-w-[1275px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-5 max-md:max-w-full max-md:mt-10">
             
              <div className="self-stretch flex items-center justify-between gap-2.5 mt-7 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="text-green-400 text-base font-medium leading-7 tracking-tighter whitespace-nowrap self-start">
                  Cart
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde1e75bbf9b76b13a57a814cdf6f5dac088919ad788458cdac459a7e57efe6d?"
                  className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-green-400 text-base font-medium leading-7 tracking-tighter self-start">
                  Details
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde1e75bbf9b76b13a57a814cdf6f5dac088919ad788458cdac459a7e57efe6d?"
                  className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-green-400 text-base font-medium leading-7 tracking-tighter self-start">
                  Shipping
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dde1e75bbf9b76b13a57a814cdf6f5dac088919ad788458cdac459a7e57efe6d?"
                  className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-neutral-800 text-base font-medium leading-7 tracking-tighter whitespace-nowrap self-start">
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
                <div className="bg-green-400 bg-opacity-20 shrink-0 h-0.5 mt-5" />
                <div className="flex w-full items-stretch justify-between gap-5 mt-6">
                  <div className="flex justify-between gap-3 items-start">
                    <div className="text-zinc-500 text-sm leading-4 tracking-tight whitespace-nowrap">
                      Method
                    </div>
                    <div className="text-neutral-800 text-sm leading-4 tracking-tight self-stretch">
                      <span className="">Standard Shipping - </span>
                      <span className="font-light">FREE</span>
                    </div>
                  </div>
                  <button className="text-green-400 text-center text-sm leading-4 tracking-tight grow whitespace-nowrap self-start">
                    Edit
                  </button>
                </div>
              </div>
              <div className="text-neutral-800 text-xl font-medium leading-7 tracking-tighter self-stretch whitespace-nowrap mt-11 max-md:max-w-full max-md:mt-10">
                Payment method
              </div>
              <div className="border border-neutral-200 self-stretch flex flex-col items-center mt-6 pb-8 rounded-lg border-solid max-md:max-w-full">
                <div className="flex-col fill-[linear-gradient(90deg,rgba(86,178,128,0.20)_0.04%,rgba(86,178,128,0.40)_97.95%)] overflow-hidden relative flex min-h-[58px] items-stretch justify-between gap-5 pl-5 pr-20 py-3.5 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b49c19b965d18832fc52c0f400d403c56f7803f8a7e9352dd358f944984bdfc0?"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/184e7f30c6c73146c2d9ae202bf96ed8184fb47db41864774d8e1f03f571020b?"
                    className="aspect-square object-contain object-center w-[31px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="relative text-green-400 text-base font-bold leading-4 tracking-tighter my-auto">
                    Credit Card
                  </div>
                </div>
                <div className="bg-white flex w-[408px] max-w-full items-center justify-between gap-5 mt-6 px-4 py-3 border-[0.5px] border-solid border-zinc-500">
                  <div className="text-zinc-600 text-sm leading-7 grow shrink basis-auto my-auto">
                    Card Number
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/861643d6f017b629ce633fec2cb5e792046a4f94ce3ac6a7561f76eb9a397964?"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="text-zinc-600 text-sm leading-7 max-w-full bg-white w-[408px] justify-center mt-3 pl-4 pr-16 py-4 border-[0.5px] border-solid border-zinc-500 items-start max-md:pr-5">
                  Holder Name
                </div>
                <div className="flex w-[408px] max-w-full items-stretch gap-3.5 mt-3">
                  <div className="text-zinc-600 text-sm leading-7 whitespace-nowrap bg-white grow justify-center items-stretch pl-4 pr-16 py-3.5 border-[0.5px] border-solid border-zinc-500 max-md:pr-5">
                    Expiration (MM/YY)
                  </div>
                  <div className="bg-white flex items-center justify-between gap-5 pl-4 pr-3 py-3 border-[0.5px] border-solid border-zinc-500">
                    <div className="text-zinc-600 text-sm leading-7 my-auto">
                      CVV
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c798a2fc1c90d2eb6a0e379a87b3851e9960b77a0393612434b0f9e01f8a58d6?"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="text-neutral-800 text-xl font-medium leading-7 tracking-tighter self-stretch whitespace-nowrap mt-11 max-md:max-w-full max-md:mt-10">
                Tax Informations
              </div>
              <div className="text-zinc-600 text-sm leading-7 max-w-[442px] bg-white self-stretch justify-center mt-7 pl-4 pr-16 py-3.5 border-[0.5px] border-solid border-zinc-500 items-start max-md:max-w-full max-md:pr-5">
                VAT number (optional)
              </div>
              <div className="text-zinc-600 text-sm leading-7 max-w-[442px] bg-white self-stretch justify-center mt-3 pl-4 pr-16 py-3.5 border-[0.5px] border-solid border-zinc-500 items-start max-md:max-w-full max-md:pr-5">
                PEC (optional)
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-zinc-100 flex flex-col w-full pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
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
      <div className="text-neutral-800 text-xl font-medium leading-7 tracking-tighter mt-11 max-md:max-w-full max-md:mt-10">
        Billing address
      </div>
      <div className="border border-neutral-200 flex w-[445px] max-w-full flex-col items-stretch ml-20 mt-6 px-5 py-5 rounded-lg border-solid self-start">
        <div className="flex justify-between gap-5 items-start">
          <div className="stroke-[3px] flex w-[31px] shrink-0 h-4 flex-col rounded-[50%]" />
          <button className="text-neutral-800 text-sm leading-4 grow shrink basis-auto mt-1">
            Same as the shipping address
          </button>
        </div>
        <div className="bg-zinc-500 shrink-0 h-px mt-5" />
        <div className="flex justify-between gap-5 mt-5 items-start">
          <div className="stroke-[3px] flex w-7 shrink-0 h-4 flex-col rounded-[50%]" />
          <button className="text-neutral-800 text-sm leading-4 grow shrink basis-auto mt-1">
            Use a different address for billing
          </button>
        </div>
      </div>
      <div className="flex w-[445px] max-w-full justify-between gap-5 ml-20 mt-11 mb-10 self-start items-start max-md:flex-wrap max-md:mt-10">
        <button className="text-green-400 text-lg leading-7 tracking-tighter underline mt-1">
          Back to shipping
        </button>
        <button className="text-white text-center text-xl font-medium whitespace-nowrap items-stretch rounded bg-green-400 self-stretch grow justify-center px-11 py-2 max-md:px-5">
          Pay now
        </button>
      </div>
    </div>
    </div>
  )
}

export default Payment