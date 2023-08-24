import React from "react";
import FPC from '../assets/FPC.png'
import Wood from '../assets/WoodLine.png'
import Kitchen from '../assets/Kitchen.png'
import Portfolio from '../assets/Portfolio.png'
import { FiArrowRight } from "react-icons/fi";

export default function Work() {
    return(    
        <div name='work' className="w-full lg:xl
         bg-[cream] pb-[40vh]">
            <div 
                className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
            >
                <div 
                    className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '
                >          
                    <div 
                        className='sm:text-right grid-cols-2 gap-8 pb-8 pl-4 '
                    >
                    <p className='text-4xl font-bold inline border-b-4 text-[#839B97] border-pink-600 drop-shadow-xl'>Work
                    </p>
                    </div>
                </div>

                {/*Container 1*/}
                <div    
                    className="grid sm:grid-cols-4 md:grid-cols-2 gap-4">
                    <p 
                        className='text-[#263159] px-8 py-4 divider-vertical'>Currently, I am enhancing the website usability by rebuilding user interface using WordPress Avada builder, Modula, Gravity form plugin, and Google maps API.
                        <div className="lg:divider-vertical  items-end">                                            <a href="https://fpcmarietta.org" target="_blank">
                            <FiArrowRight color="rgb(219 39 119)" size={30} />
                        </a></div>

                    </p>

                    <div 
                        style={{backgroundImage: `url(${FPC})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div mb-10">
                    </div>                   
                </div>

                {/*Container 2*/}
                <div    
                    className="grid sm:grid-cols-4 md:grid-cols-2 gap-4">
                    <p 
                        className='text-[#263159] px-8 py-4'>As my capstone project at Kennesaw State University, me and my team built a Blazer project management application for the WoodLine Interior DESIGN.
                    <a href="https://github.com/ywoo940912/WoodDomain-master-2" target="_blank">
                        <FiArrowRight color="rgb(219 39 119)" size={30} />  
                    </a>
                    </p>
                    <div
                        style={{ backgroundImage: `url(${Wood})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div mb-10">
                    </div>                 
                </div>

                {/*Container 3*/}
                <div    
                    className="grid sm:grid-cols-4 md:grid-cols-2 gap-4">
                    <p 
                        className='text-[#263159]  px-8 py-4'>I designed a mobile prototype that walkthroughs operating scenarios from user's point of view using MarvelApp. Application demonstrates the work flow of kitchen task operator app.
                        <a href="https://marvelapp.com/prototype/9g18fjf" target="_blank">
                            <FiArrowRight color="rgb(219 39 119)" size={30} />
                        </a>
                    </p>
                    <div 
                        style={{backgroundImage: `url(${Kitchen})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div mb-10">
                    </div>                   
                </div>

                {/*Container 4*/}
                <div    
                    className="grid sm:grid-cols-4 md:grid-cols-2 gap-4">
                    <p 
                        className='text-[#263159]  px-8 py-4'>This is my first Portfolio Website using React.JS, TailwindCSS, and Getform. It is a single page application, currently I am working on converting to multiple page application with react-router-dom.
                        <a href="/" target="_blank">
                            <FiArrowRight color="rgb(219 39 119)" size={30} />
                        </a>
                    </p>
                    <div 
                        style={{backgroundImage: `url(${Portfolio})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div mb-10">
                    </div>                   
                </div>

            </div>
        </div>
    )
}