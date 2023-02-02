import React from "react";
import Profile from '../assets/Profile.png'
export default function Main() {
    return(    
        <div name= "main" className="w-full h-screen bg-[cream]">

        <div className=" w-full h-[20px] grid object-right px-550 bg-[cream]">
            <div>
                <img className="object-right ml-[65vw] mt-[22vh] " src={Profile} alt='Profile image' style={{ width: '300px'}} />
            </div>
        </div>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#34626C] font-mono drop-shadow-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#839B97] drop-shadow-xl'>
            Yeon Woo,
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#6D8299] drop-shadow-xl'>
            I'm a Front-end Developer.
            </h2>
            <p className='text-[#263159] py-4 max-w-[700px] drop-shadow-xl font-mono'>
            I’m a front-end developer specializing in building (and occasionally designing) exceptional digital experiences. I focus on building responsive front-end web applications.
            </p>
        </div>


    </div>
    )
}