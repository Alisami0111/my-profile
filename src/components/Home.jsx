import React from 'react';
import Ali from '../assets/ali.png';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#f7dbd3]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-1 md:max-w-[60%] md:ml-[100px] px-8 flex flex-col flex-1 justify-center align-start h-full'>
        <p className='text-[#A34343]'>Hi, my name is</p>
        <h1 className=' text-4xl sm:text-7xl font-bold text-[#DD5746]'>
          Ali Sami
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#2a2a2c]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#000] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
        
          <button className='text-[#2a2a2c] border-[#2a2a2c] group rounded-3xl border-2 px-6 py-3 my-2 flex items-center hover:bg-[#DD5746] hover:border-[#DD5746]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
      {/* <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#A34343]'>Hi, my name is</p>
        <h1 className=' text-4xl sm:text-7xl font-bold text-[#DD5746]'>
          Ali Sami
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#2a2a2c]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#000] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
        
          <button className='text-[#2a2a2c] border-[#2a2a2c] group rounded-3xl border-2 px-6 py-3 my-2 flex items-center hover:bg-[#DD5746] hover:border-[#DD5746]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div> */}

      <div className='w-[39%] absolute top-[100px] right-[0px] hidden lg:block' >
            <img src={Ali} alt="" className='w-[400px] h-[400px] z-0' />
          </div>
    </div>
  );
};

export default Home;
