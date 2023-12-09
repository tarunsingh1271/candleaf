import React from 'react'

const Cartinfo = () => {
  return (
    <div className="bg-white flex flex-col">
        <div className="self-center w-full max-w-[1110px] mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch px-5 max-md:max-w-full max-md:mt-8">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.25] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
              <div className="text-green-400 text-center text-xl font-medium leading-7 tracking-tighter self-center mt-5 max-md:max-w-full">
                <span className="font-medium text-neutral-800">
                  All hand-made with natural soy wax, Candleaf is made for your
                  pleasure moments. 
                </span>
                <span className="font-medium text-zinc-800">
                  <br />
                  🚚{" "}
                </span>
                <span className="font-bold text-green-400">FREE SHIPPING</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10">
              <div className="justify-center text-neutral-800 text-2xl font-medium leading-[58px] tracking-tighter max-md:max-w-full">
                Spiced Mint Candleaf®
              </div>
              <div className="mt-7 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch mt-1 max-md:mt-10">
                      <div className="justify-center text-green-400 text-2xl font-semibold leading-[58px] tracking-tighter">
                        $ 9.99
                      </div>
                      <div className="justify-center items-stretch bg-white flex flex-col mt-10 pt-1.5 max-md:mt-10">
                        <div className="text-neutral-800 text-center text-lg leading-7 tracking-tighter whitespace-nowrap">
                          Quantity
                        </div>
                        <div className="text-neutral-400 text-center text-lg leading-7 tracking-tighter whitespace-nowrap border border-[color:var(--green,#56B280)] justify-center items-stretch mt-2 px-4 py-2.5 border-solid">
                          <span className="text-green-400">+</span>
                          <span className="text-zinc-800"> 1 </span>
                          <span className="text-neutral-400">-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                      <div className="justify-center bg-white flex w-full flex-col items-start">
                        <div className="flex items-stretch gap-5 ml-5 max-md:ml-2.5">
                          <div className="stroke-[3px] flex w-4 shrink-0 h-4 flex-col rounded-[50%]" />
                          <div className="text-neutral-800 text-base leading-4 tracking-tighter self-start">
                            One time purchase
                          </div>
                        </div>
                        <div className="border self-stretch flex w-full flex-col items-stretch mt-6 px-5 py-5 rounded-lg border-solid border-neutral-200 max-md:pr-5">
                          <div className="flex justify-between gap-3.5 items-start max-md:justify-center">
                            <div className="stroke-[3px] flex w-4 shrink-0 h-4 flex-col rounded-[50%]" />
                            <div className="text-neutral-800 text-base leading-4 tracking-tighter my-auto">
                              Subscribe and delivery every{" "}
                            </div>
                            <div className="border self-stretch flex justify-between gap-1.5 px-2.5 py-1.5 border-solid border-neutral-200 items-start">
                              <div className="text-neutral-800 text-sm leading-4 tracking-tighter grow whitespace-nowrap">
                                4 weeks
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fcb37a107dbc647c1d825de1e75f3f29932bf30d394c30af732b0d9055528bb?"
                                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full"
                              />
                            </div>
                          </div>
                          <div className="text-green-400 text-sm font-light leading-4 mt-3">
                            <span className="text-zinc-500">
                              Subscribe now and get the 10% of discount on every
                              recurring order. The discount will be applied at
                              checkout.
                            </span>
                            <span className="text-stone-500"> </span>
                            <span className="text-green-400">See details</span>
                          </div>
                        </div>
                      </div>
                      <div className="items-stretch rounded bg-green-400 flex justify-between gap-4 mt-16 px-20 py-2.5 max-md:mt-10 max-md:px-5">
                        <img loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d29a3329335462ade39aa2aabd11a9b0b8add85b4e62ed1a6f12b4f3d0a8b0ca?"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />

                        <button className="text-white text-center text-xl self-center grow whitespace-nowrap my-auto">
                          + Add to cart
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border flex flex-col items-stretch mt-10 pl-6 pr-8 py-7 rounded-lg border-solid border-neutral-200 max-md:max-w-full max-md:px-5">
                <div className="text-neutral-400 text-base leading-7 whitespace-nowrap max-md:max-w-full">
                  <span className="text-zinc-800">Wax: </span>
                  <span className="text-neutral-400">
                    Top grade Soy wax that delivers a smoke less, consistent
                    burn
                  </span>
                </div>
                <div className="text-neutral-400 text-base leading-7 mt-4 max-md:max-w-full">
                  <span className="text-zinc-800">Fragrance: </span>
                  <span className="text-neutral-400">
                    Premium quality ingredients with natural essential oils{" "}
                  </span>
                </div>
                <div className="flex justify-between gap-2.5 mt-4 items-start max-md:max-w-full max-md:justify-center">
                  <div className="text-neutral-400 text-base leading-7 self-stretch whitespace-nowrap">
                    <span className="text-zinc-800">Burning Time: </span>
                    <span className="text-neutral-400">70-75 hours</span>
                  </div>
                  <div className="text-neutral-400 text-base leading-7">
                    <span className="text-zinc-800">Dimension:</span>
                    <span className="text-neutral-400"> 10cm x 5cm </span>
                  </div>
                  <div className="text-neutral-400 text-base leading-7 self-stretch whitespace-nowrap">
                    <span className="text-zinc-800">Weight: </span>
                    <span className="text-neutral-400">400g </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cartinfo
