import React from 'react'

function About() {
    return (
        <div className='bg-[#CDEA68] text-zinc-900 black'>
            <h2 className='text-5xl font-montserrat font-medium tracking-tight px-20 pt-20'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h2>
            <div className="w-full flex gap-1  px-20 py-6 mt-12 border-t-[1px] border-[#a5bb57]">
                <div className="w-1/2">
                    <h2 className='text-5xl font-montserrat font-medium tracking-tight'>Our approach:</h2>
                    <button className='font-montserrat tracking-tighter text-sm mt-4 py-4 px-6 bg-zinc-900 text-white uppercase rounded-full flex items-center gap-6 font-light'>Read More
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </button>
                </div>
                <div className="w-1/2 h-[70vh] bg-[#c1d579] rounded-xl"></div>
            </div>
        </div>
    )
}

export default About