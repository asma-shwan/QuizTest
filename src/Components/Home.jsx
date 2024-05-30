import React from 'react';
import background from "../assets/background.png";



export default function Home(props){
    return(
        
        <>
         <div style={{backgroundImage: `url(${background})`, backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "80%", backgroundRepeat: "no-repeat"}} className='flex items-center justify-center h-screen'>    
          <div className='flex flex-col items-center justify-center gap-3'> 
          <h1 className='text-5xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(225,225,225,0.8)] text-center xl:text-[150px] lg:text-[130px] md:text-[100px] sm:text-8xl '><span className='text-[#FFD15B]'>Quiz</span>Quest</h1>
          <h2 className='mt-3 text-base font-extrabold text-center 2xl:text-3xl xl:text-2xl lg:text-xl md:text-base'>"Challenge your <span className='text-[#FFD15B] '>mind</span>, expand your  <span className='text-[#FFD15B]'>knowledge</span>. Welcome to the world of <span className='text-[#FFD15B]'>quizzes!!</span>"</h2>
          <button 
          onClick={props.showStep}
          className='bg-[#FFD15B] hover:bg-[#ffe29a] transition-all 2xl:w-44 xl:w-40 lg:w-36 md:w-32 sm:w-28 w-24 2xl:h-14 xl:h-12 md:h-8 sm:h-8 h-8 lg:h-10 2xl:text-2xl  xl:text-xl lg:text-lg md:text-lg sm:text-base text-base rounded 2xl:mt-9 xl:mt-8 lg:mt-7 md:mt-6 mt-6 mt-5'>Start</button>
        </div>
      </div>
        </>
    )
}