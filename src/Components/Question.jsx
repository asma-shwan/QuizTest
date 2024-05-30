import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Item from "./Item";
import { Button } from '@mui/material';

export default function Question(props){
  return (
        <div className='border-[#4147D5] flex items-center gap-8 justify-evenly relative h-4/5 w-4/5 rounded border-4 p-5'>
        <div className='flex flex-col items-center justify-center gap-2 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-2'>
        <div className='flex 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-base items-center border border-[#4147D5] border-2 justify-center w-8 h-8 bg-[#4147D5] bg-opacity-45 rounded-full 2xl:w-16 xl:w-14 lg:w-12 2xl:h-16 xl:h-14 lg:h-12 md:w-10 sm:w-8 md:h-10 sm:h-8'>
          {props.Number+1}
        </div>
        <div className='flex flex-wrap text-sm font-bold text-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-base'>
       {props.question}
        </div>
        <Grid container justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         
        {
          
        props.answers.map((A, index) => (
          
          A.answer !==  null && (
             <Item
             submit={props.submit}
             isCorrect={props.isCorrect}
                  answerDetail={A}
                  answer={props.answer}
                  handleAnswer={()=>props.handleAnswer(props.Id,A.Name)}
                  key={index}
                 />
          )  
          ))
          }

        </Grid>
        
      </div>
    </div>
    )
}