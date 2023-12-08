import React from 'react'

const Popular = () => {
  return (
    <div className="bg-white flex flex-col">
      <div className="text-sky-950 text-center text-4xl font-medium leading-[58px] tracking-tighter self-center max-w-[1192px] mt-24 max-md:mt-10">
        Popular
      </div>
      <div className="text-slate-500 text-center text-lg font-medium leading-7 tracking-normal self-center max-w-[1192px] mt-5">
        Our top selling product that you may like
      </div>
      <div className="self-center w-full max-w-[1110px] mt-16 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.11] object-contain object-center w-[255px] shadow-lg overflow-hidden shrink-0 max-w-full grow max-md:mt-8"
              alt="image"      />
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.11] object-contain object-center w-[255px] shadow-lg overflow-hidden shrink-0 max-w-full grow max-md:mt-8"
              alt="image"    />
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.11] object-contain object-center w-[255px] shadow-lg overflow-hidden shrink-0 max-w-full grow max-md:mt-8"
              alt="image"    />
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[1.11] object-contain object-center w-[255px] shadow-lg overflow-hidden shrink-0 max-w-full grow max-md:mt-8"
              alt="image"   />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular
