import React from 'react'

const Auth = () => {
  return (
    <div>
       <div className="bg-white pl-20 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col mt-5 max-md:max-w-full max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e9640a6917fe64d2fcecee73d1fd465ac40e547c6c507d025e63edb70f6eab?"
              className="aspect-[3.71] object-contain object-center w-[126px] justify-center items-center overflow-hidden max-w-full self-start"
            />
            <div className="self-stretch flex items-center justify-between gap-2.5 mt-7 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-green-400 text-base font-medium leading-7 tracking-tighter whitespace-nowrap self-start">
                Cart
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a97e94ec2a1799547addc6460b3d643a5ed4b6b536331908f3410aed73b01a9?"
                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-neutral-800 text-base font-medium leading-7 tracking-tighter self-start">
                Details
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a97e94ec2a1799547addc6460b3d643a5ed4b6b536331908f3410aed73b01a9?"
                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-zinc-600 text-base font-medium leading-7 tracking-tighter self-start">
                Shipping
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/58ea476fe759498b2d26abb0eaaf469bd7e93d0b6056b2d1b60f32e62367d363?"
                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-zinc-600 text-base font-medium leading-7 tracking-tighter whitespace-nowrap self-start">
                Payment
              </div>
            </div>
            <div className="self-stretch flex justify-between gap-5 mt-14 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="text-neutral-800 text-xl font-medium leading-7 tracking-tighter">
                Contact
              </div>
              <div className="justify-end text-green-400 text-right text-sm font-medium leading-7 tracking-tighter w-[246px]">
                <span className="text-zinc-600">Do you have an account?</span>
                <span className="text-neutral-800"> </span>
                <span className="text-green-400"> Login</span>
              </div>
            </div>
            <div className="text-zinc-600 text-sm leading-7 max-w-[442px] border-[color:var(--green,#56B280)] bg-white self-stretch justify-center mt-4 pl-4 pr-16 py-3.5 border-[0.5px] border-solid items-start max-md:max-w-full max-md:pr-5">
              Email or mobile phone number
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-2 mt-2.5 max-md:max-w-full max-md:flex-wrap">
              <div className="bg-white flex w-[21px] shrink-0 h-4 flex-col border-2 border-solid border-zinc-400" />
              <div className="text-neutral-800 text-sm leading-4 self-center grow shrink basis-auto my-auto">
                Add me to Candleaf newsletter for a 10% discount
              </div>
            </div>
            <div className="text-neutral-800 text-xl font-medium leading-7 tracking-tighter self-stretch whitespace-nowrap mt-14 max-md:max-w-full max-md:mt-10">
              Shipping Address
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-3.5 mt-3.5 max-md:max-w-full max-md:flex-wrap">
              <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                <div className="text-zinc-600 text-sm leading-7 bg-white justify-center pl-4 pr-16 py-4 border-[0.5px] border-solid border-zinc-500 items-start max-md:pr-5">
                  Name
                </div>
              </div>
              <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                <div className="text-zinc-600 text-sm leading-7 bg-white justify-center pl-4 pr-16 py-4 border-[0.5px] border-solid border-zinc-500 items-start max-md:pr-5">
                  Second Name
                </div>
              </div>
            </div>
            <div className="text-zinc-600 text-sm leading-7 max-w-[442px] bg-white self-stretch justify-center mt-3 pl-4 pr-16 py-4 border-[0.5px] border-solid border-zinc-500 items-start max-md:max-w-full max-md:pr-5">
              Address and number
            </div>
            <div className="text-zinc-600 text-sm leading-7 max-w-[442px] bg-white self-stretch justify-center mt-3 pl-4 pr-16 py-3.5 border-[0.5px] border-solid border-zinc-500 items-start max-md:max-w-full max-md:pr-5">
              Shipping note (optional)
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-3 mt-3 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                <div className="text-zinc-600 text-sm leading-7 bg-white justify-center pl-4 pr-16 py-3.5 border-[0.5px] border-solid border-zinc-500 items-start max-md:pr-5">
                  City
                </div>
              </div>
              <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                <div className="text-zinc-600 text-sm leading-7 bg-white justify-center items-stretch pl-4 pr-12 py-4 border-[0.5px] border-solid border-zinc-500 max-md:pr-5">
                  Postal Code
                </div>
              </div>
              <div className="flex grow basis-[0%] flex-col justify-center items-stretch">
                <div className="bg-white flex items-center justify-between gap-5 pl-2.5 pr-4 py-1.5 border-[0.5px] border-solid border-zinc-500">
                  <div className="flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="text-zinc-600 text-xs">Province</div>
                    <div className="text-neutral-800 text-sm mt-1.5">
                      Province
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/396b9083cd1b35d1252602d47a57bbe71dae0cb146432b1091575a4d9c27883c?"
                    className="aspect-[0.89] object-contain object-center w-[25px] overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white self-stretch flex justify-between gap-5 mt-3 pl-2.5 pr-4 py-1.5 border-[0.5px] border-solid border-zinc-500 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="flex grow basis-[0%] flex-col items-stretch mt-1">
                <div className="text-zinc-600 text-xs">Country/Region</div>
                <div className="text-neutral-800 text-sm">Italy </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/396b9083cd1b35d1252602d47a57bbe71dae0cb146432b1091575a4d9c27883c?"
                className="aspect-[0.89] object-contain object-center w-[25px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-1.5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
              <div className="bg-white flex w-[23px] shrink-0 h-4 flex-col border-2 border-solid border-zinc-400" />
              <div className="text-neutral-800 text-sm leading-4 self-center grow shrink basis-auto my-auto">
                Save this informations for a future fast checkout
              </div>
            </div>
            <div className="self-stretch flex items-center justify-between gap-5 mt-16 px-px max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <button className="text-green-400 text-lg leading-7 tracking-tighter underline my-auto">
                Back to cart
              </button>
              <button className="text-white text-center text-xl font-medium whitespace-nowrap items-stretch rounded bg-green-400 self-stretch grow justify-center px-11 py-2 max-md:px-5">
                Go to shipping
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
              <div className="flex basis-[0%] flex-col items-stretch">
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
                <div className="justify-end text-zinc-600 text-right text-sm font-medium leading-7 self-stretch whitespace-nowrap mt-7">
                  Calculated at the next step
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

export default Auth
