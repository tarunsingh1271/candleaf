import React from 'react'

const Testimonials = () => {
  return (
    <div className="bg-white flex flex-col">
        <div className="bg-green-400 bg-opacity-10 self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1110px] flex-col items-stretch mt-14 mb-10 max-md:max-w-full max-md:mt-10">
          <div className="text-sky-950 text-center text-4xl font-medium leading-[58px] tracking-tighter self-center max-w-[1192px]">
            Testimonials
          </div>
          <div className="text-slate-500 text-center text-lg font-medium leading-7 tracking-normal self-center max-w-[1192px] mt-7">
            Some quotes from our happy customers
          </div>
          <div className="mt-9 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="shadow-lg bg-white flex grow flex-col w-full pl-16 pr-14 py-9 rounded-md max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-[84px] overflow-hidden self-center max-w-full"
                    alt="image"       />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa9c7f79464581969c14055a1bee532195b644f0c0d529b2ed568fba639a6ae9?"
                    className="aspect-[6.08] object-contain object-center w-[146px] overflow-hidden self-center max-w-full mt-3.5"
                    alt="image"     />
                  <div className="text-slate-800 text-center text-2xl font-medium leading-7 self-stretch mt-7">
                    “I love it! No more air fresheners”
                  </div>
                  <div className="text-zinc-500 text-center text-lg self-center max-w-[344px] mt-5">
                    Luisa
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="shadow-lg bg-white flex grow flex-col w-full pl-20 pr-16 py-9 rounded-md max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-[84px] overflow-hidden self-center max-w-full"
                    alt="image"     />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/befb25a7196e5b6620151489e209487757aa47c312b89dcdde26644377acac6b?"
                    className="aspect-[6.08] object-contain object-center w-[146px] overflow-hidden self-center max-w-full mt-3.5"
                    alt="image"     />
                  <div className="text-slate-800 text-center text-2xl font-medium leading-7 self-stretch mt-7">
                    “Raccomended for everyone”
                  </div>
                  <div className="text-zinc-500 text-center text-lg self-center max-w-[344px] mt-3.5">
                    Edoardo
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="shadow-lg bg-white flex grow flex-col w-full pl-14 pr-11 py-9 rounded-md max-md:mt-8 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-[84px] overflow-hidden self-center max-w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf6dad70602d1b33c18c7adf3e332faa81ed4e7cb753d3138d902e09d1c9330e?"
                    alt="image"     className="aspect-[6.08] object-contain object-center w-[146px] overflow-hidden self-center max-w-full mt-3.5"
                  />
                  <div className="text-slate-800 text-center text-2xl font-medium leading-7 self-stretch mt-7">
                    “Looks very natural, the smell is awesome”
                  </div>
                  <div className="text-zinc-500 text-center text-lg self-center max-w-[344px] mt-5">
                    Mart
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

export default Testimonials
