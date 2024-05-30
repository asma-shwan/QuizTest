import React from 'react';
import Grid from '@mui/material/Grid';
export default function Item(props){
  let color=""
  if((props.isCorrect && props.submit && props.answerDetail.choose) ){
    color="#1DCD6E"
  }else if(!props.isCorrect && props.submit &&  props.answerDetail.choose){
     color="#E74C4C"
  }
  else if(props.answerDetail.choose && !props.submit ){
    color= "#FFDF90"
  } else if (!props.answerDetail.choose){
   color="white"

  }
    return (
      <Grid item xs={11} md={11} lg={5} xl={5} >
        <div 
        onClick={!props.submit && props.handleAnswer}
        className={`flex flex-row items-center justify-between  h-16 border-2  border-black cursor-pointer sm:h-16  md:h-20 xl:h-24 2xl:h-20 lg:h-20`}
        style={{ backgroundColor: color }}
        >
            <div className='flex justify-center  self-end items-center text-center font-bold 2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-sm text-sm   w-12 bg-[#4147D5] bg-opacity-45  2xl:w-16 xl:w-16 lg:w-14  md:w-14 sm:w-12  h-full'>
              {props.answerDetail.Name}
            </div>
            <div className='flex flex-wrap items-center justify-center w-full h-full text-sm text-center 2xl:text-lg xl:text-lg lg:text-base md:text-base sm:text-sm'>
              <h1>{props.answerDetail.answer}</h1>
            </div>
        </div>
      </Grid>
    )
}