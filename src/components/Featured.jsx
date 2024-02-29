import React from 'react'

function Featured() {
    return (
        <div className='py-20'>
            <div className="border-b-[1px] border-zinc-600 px-20 pb-10">
                <h1 className='text-5xl font-montserrat'>Featured projects</h1>
            </div>
            <div className="cards flex gap-4 px-20 mt-20">
                <div className="cardContainer w-full h-[80vh] bg-red-400 rounded-xl relative">
                    <h2 className='uppercase text-8xl font-extrabold font-condensed absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 text-[#CDEA68] z-[99]'>Fede</h2>
                    <div className="card h-full">
                        <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className="cardContainer w-full h-[80vh] bg-red-400 rounded-xl relative">
                    {/* <h2 className='uppercase absolute top-1/2'>Fede</h2> */}
                    <div className="card w-full h-full overflow-hidden">
                        <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured