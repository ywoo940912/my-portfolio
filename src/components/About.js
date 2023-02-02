import React from "react";

export default function About() {
    return(    
        <div name='about' className='w-full h-screen bg-[cream] text-[#6D8299]-300 '>
          <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
              <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 text-[#839B97] border-pink-600 drop-shadow-xl'>
                  About
                </p>
            </div>

            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold text-[#6D8299] drop-shadow-xl'>
                <p>Hi. I'm Yeon Woo, nice to meet you. Hope you can get to know me!</p>
              </div>
              <div className='text-[#263159] drop-shadow-xl'>
                <p>I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all the
                way to large enterprise corporations. What would you do if you had
                a software expert available at your fingertips?</p>  
              </div>
            </div>
        </div>
      </div>
    )
}