import React from 'react';
import 'animate.css';
import Question from './Question';
import { Button } from '@mui/material';

const ThirdStep = React.forwardRef((props, ref) => {
  return (
    <div 
    ref={ref} 
    className='flex flex-col items-center justify-center h-full gap-4 p-2 sm:p-3 lg:p-3 md:p-3 xl:p-3 2xl:p-4'
    
    >
      {props.question.length > 0 ? (
        <>
          {props.question.map((Q, index) => (
            <Question 
            isCorrect={Q.isCorrect}
              key={index}
              submit={props.submit}
              Number={index}
              question={Q.question}
              answers={Q.answers}
              Id={Q.id}
              handleAnswer={props.handleAnswer}
            />
          ))}
         <div className='flex flex-col gap-4 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col'>
          <Button
          type='submit' 
            className='transition-all' 
            sx={{ 
              width: { xs: '100px', sm: '120px', md: '150px', lg: '200px', xl: '200px' }, 
              height: { xs: '30px', sm: '35px', md: '40px', lg: '45px', xl: '50px' },
              fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' },
              mt: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
              backgroundColor: '#4147D5',
              color: 'white',
              borderRadius: 2
            }}
            onClick= {props.submit ? props.handleRestart: props.FormSubmite} 
          > 
          {props.submit ? "Resert":"Submit"  } 
          </Button>
          
          </div> 
        </>
      ) : (
        <h1 className='flex items-center justify-center text-base text-center 2xl:text-4xl xl:text-2xl lg:text-xl md:text-lg sm:text-sm'>
          Please select a type and difficulty to start the quiz. Good luck 😊
        </h1>
      )}
    </div>
  );
});

export default ThirdStep;
