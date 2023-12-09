import React from 'react'

const Cardbg = () => {
  return (

    <div className="flex-col overflow-hidden self-stretch relative flex min-h-[780px] w-full items-stretch pb-12 max-md:max-w-full">
        
        <div className="relative bg-white flex w-full flex-col items-center pt-5 max-md:max-w-full">
          <div className="flex w-full max-w-[1108px] items-center justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            
          </div>
          <div className="bg-green-400 bg-opacity-20 self-stretch min-h-[1px] w-full mt-5 max-md:max-w-full" />
        </div>
        <div className="relative backdrop-blur-md bg-slate-50 bg-opacity-80 self-center flex w-[730px] max-w-full flex-col items-center mt-44 mb-24 px-20 py-11 rounded-sm max-md:my-10 max-md:px-5">
          <div className="justify-center text-zinc-800 text-center text-4xl font-medium leading-[58px] max-w-[540px]">
            🌱 <br />
            The nature candle
          </div>
          <div className="text-zinc-800 text-center text-lg leading-7 max-w-[537px] mt-5 max-md:max-w-full">
            All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments{" "}
          </div>
          <button className="text-white text-center text-xl font-medium whitespace-nowrap items-stretch rounded bg-green-400 justify-center mt-14 mb-3.5 px-11 py-2 max-md:mt-10 max-md:px-5"> Discovery our collection
          </button>
        </div>
      </div>

  )
}

export default Cardbg
