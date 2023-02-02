import React from "react";
import FPC from '../assets/FPC.png'
import Wood from '../assets/WoodLine.png'
import Kitchen from '../assets/Kitchen.png'
import Portfolio from '../assets/Portfolio.png'

export default function Work() {
    return(    
        <div name='work' className="w-full 
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
                        className='text-[#263159]  px-8 py-4'>// Currently I am enhanced usability by rebuilding user interface using WordPress Avada builder, Modula, Gravity form plugin, and Google maps API

                    </p>
                {/*Grid Item*/}
                    <div 
                        style={{backgroundImage: `url(${FPC})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div mb-10">

                        {/* Hover Effects */}
                        <div 
                            className="opacity-0 group-hover:opacity-100">
                            <span 
                                className="text-2x1 font-bold text-white tracking-wider">WordPress Application
                            </span>
                            <div 
                                className="pt-8 text-center">
                                <a 
                                    href="https://fpcmarietta.org" target = "_blank">
                                    <button 
                                        className="text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg"> Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>                   
                </div>

                {/*Container 2*/}
                <div    
                    className="grid sm:grid-cols-4 md:grid-cols-2 gap-4">
                    <p 
                        className='text-[#263159]  px-8 py-4'>// As my capstone project at Kennesaw State University, me and my team built a Blazer project management application for the WoodLine Interior DESIGN.  
                    </p>
                {/*Grid Item*/}
                    <div 
                        style={{backgroundImage: `url(${Wood})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div mb-10">

                        {/* Hover Effects */}
                        <div 
                            className="opacity-0 group-hover:opacity-100">
                            <span 
                                className="text-2x1 font-bold text-white tracking-wider">ASP.NET Application
                            </span>
                            <div 
                                className="pt-8 text-center">
                                <a 
                                    href="https://github.com/ywoo940912/WoodDomain-master-2" target = "_blank">
                                    <button 
                                        className="text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg"> Repo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>                   
                </div>

                {/*Container 3*/}
                <div    
                    className="grid sm:grid-cols-4 md:grid-cols-2 gap-4">
                    <p 
                        className='text-[#263159]  px-8 py-4'>// I designed a mobile prototype walkthroughs application operating scenarios user point of view using MarvelApp. Application demonstrate work flow of kitchen task operator app.
                    </p>
                {/*Grid Item*/}
                    <div 
                        style={{backgroundImage: `url(${Kitchen})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div mb-10">

                        {/* Hover Effects */}
                        <div 
                            className="opacity-0 group-hover:opacity-100">
                            <span 
                                className="text-2x1 font-bold text-white tracking-wider">MarvelApp Prototype
                            </span>
                            <div 
                                className="pt-8 text-center">
                                <a 
                                    href="https://marvelapp.com/prototype/9g18fjf" target = "_blank">
                                    <button 
                                        className="text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg"> Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>                   
                </div>

                {/*Container 4*/}
                <div    
                    className="grid sm:grid-cols-4 md:grid-cols-2 gap-4">
                    <p 
                        className='text-[#263159]  px-8 py-4'>// This is my first Portfolio Website using React.JS, TailwindCSS, and Getform. It is a single page application, currently I am working on converting to multiple page application with react-router-dom
                    </p>
                {/*Grid Item*/}
                    <div 
                        style={{backgroundImage: `url(${Portfolio})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div mb-10">

                        {/* Hover Effects */}
                        <div 
                            className="opacity-0 group-hover:opacity-100">
                            <span 
                                className="text-2x1 font-bold text-white tracking-wider">React.JS Application
                            </span>
                            <div 
                                className="pt-8 text-center">

                                <a 
                                    href="/" target = "_blank">
                                    <button 
                                        className="text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg"> Repo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>                   
                </div>

            </div>
        </div>
    )
}