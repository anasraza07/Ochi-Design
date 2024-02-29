import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
    return (
        <div className='w-full h-screen pt-1'>
            <div className="textstructure mt-40 px-20 font-condensed">
                {["we create", "eye-opening", "presentations"].map((item, index) => (
                    <div className='masker flex items-center gap-2'>
                        {index === 1 && (
                            <div className="relative -top-1 bg-red-500 h-20 w-32 rounded-lg"></div>
                        )}
                        <h1 className='text-9xl tracking-tight uppercase font-bold 
                    leading-[99px]'>{item}</h1>
                    </div>
                ))}
            </div>
            <div className="w-full mt-20 flex justify-between py-4 px-20 border-t-[1px] border-zinc-700">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='font-light tracking-tight text-zinc-200 font-montserrat flex items-center'>{item}</p>
                ))}
                <div className="start flex items-center gap-2">
                    <div className="uppercase border-[1px] border-zinc-400 rounded-full py-1 px-4 cursor-pointer">start the project</div>
                    <div className="border-[1px] border-zinc-400 rounded-full w-9 h-9 flex items-center justify-center rotate-45 cursor-pointer"><FaArrowUp /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage