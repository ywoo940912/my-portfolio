import React from "react";

export default function Contact() {
    return(    
        <div name='contact' className='w-full h-max bg-[cream] flex justify-center items-center '>
        <form method="POST" action="https://getform.io/f/8cd745f5-b758-4c22-a6b2-39154bd534c4" className='flex flex-col max-w-[600px] w-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#839B97] border-pink-600 drop-shadow-xl'>Contact
                </p>
                <p className='text-[#263159] py-4 drop-shadow-xl'>// Submit the form below or shoot me an email - ywoo940912@gmail.com
                </p>
            </div>

            <input className='bg-[#D5BFBF] p-2 rounded-md drop-shadow-xl ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#D5BFBF] rounded-md drop-shadow-xl' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#D5BFBF] p-2 rounded-md drop-shadow-xl' name="message" rows="10" placeholder='Message'>
            </textarea>
            <button className='text-[#D5BFBF] border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md drop-shadow-xl'>Let's Get to Work!
            </button>
        </form>
    </div>
    )
}