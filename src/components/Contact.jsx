import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-[120vh]] bg-[#f8f3f2] flex justify-center items-center p-4 text-black'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#DD5746] text-[#DD5746]'>Contact</p>
            </div>
            <input className='bg-[#f2f4f7] p-2 rounded-sm border-2 border-[#DD5746]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f2f4f7] rounded-sm border-2 border-[#DD5746]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f2f4f7] p-2 rounded-sm border-2 border-[#DD5746]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 border-black rounded-3xl hover:bg-[#DD5746] hover:border-[#DD5746] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact