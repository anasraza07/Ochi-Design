import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)

        })
    }, [])

    return (
        <div className='w-full h-screen'>
            <div className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center relative">
                <div className="absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                    <div className="w-48 h-48 flex justify-center items-center rounded-full bg-white">
                        <div className="w-[55%] h-[55%] rounded-full bg-zinc-800 relative flex items-center justify-center uppercase">play
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full px-[1px]">
                                <div className="w-5 h-5 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-48 h-48 flex justify-center items-center rounded-full bg-white">
                        <div className="w-[55%] h-[55%] rounded-full bg-zinc-800 flex items-center justify-center relative uppercase">play
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 line w-full px-[1px]">
                                <div className="w-5 h-5 bg-white rounded-full "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes