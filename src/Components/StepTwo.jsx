import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography, Box, Button } from '@mui/material';

const StepTwo = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref} className='flex flex-col items-center justify-center h-screen gap-3 2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-5 sm:gap-4 '>

      <FormControl className='flex flex-col items-center justify-center w-[90%] gap-2'>
        <Typography variant='h6' className='text-[#4147D5]'>
          Category
        </Typography>
        <Select
          value={props.Types.category}
          onChange={props.handleType}
          name="category"
          sx={{ 
            width: { xs: '100%', sm: '90%', md: '80%', lg: '80%', xl: '50%' }, 
            border: "none", 
            outline: "none", 
            borderRadius: 5 
          }}
        >
          <MenuItem value={"SQL"}>SQL</MenuItem>
          <MenuItem value={"Linux"}>Linux</MenuItem>
          <MenuItem value={"Code"}>Code</MenuItem>
          <MenuItem value={"Docker"}>Docker</MenuItem>
          <MenuItem value={"DevOps"}>DevOps</MenuItem>
        </Select>
      </FormControl>

      <FormControl className='flex flex-col  w-[90%] items-center justify-center gap-2'>
        <Typography variant='h6' className='text-[#4147D5]'>
          Difficulty
        </Typography>
        <Select
          value={props.Types.difficulty}
          onChange={props.handleType}
          name="difficulty"
          sx={{ 
            width: { xs: '100%', sm: '90%', md: '80%', lg: '80%', xl: '50%' },  
            border: "none", 
            outline: "none", 
            borderRadius: 5 
          }}
        >
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Hard"}>Hard</MenuItem>
        </Select>
      </FormControl>

      {props.errors &&
        <Typography variant='body2' className='text-[#E74C4C] animate__bounceIn animate__animated mb-5'>
          Please select type and difficulty
        </Typography>
      }

      <Button 
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
        onClick={props.handleGenerate}
      >
        Generate
      </Button>
    </Box>
  );
});

export default StepTwo;
