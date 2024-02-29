import React from 'react'

function Marquee() {
    return (
        <div className='w-full bg-[#224D44] py-20 rounded-t-2xl rounded-b-2xl'>
            <div className="border-t-[1px] border-b-[1px] border-zinc-500 whitespace-nowrap overflow-hidden flex items-center">
                <h1 className='uppercase text-[24vw] font-extrabold font-condensed tracking-tight -my-28'>we are ochi</h1>

                <h1 className='uppercase text-[24vw] font-extrabold font-condensed tracking-tight -my-28 pl-10'>we are ochi</h1>
            </div>
        </div>
    )
}

export default Marquee