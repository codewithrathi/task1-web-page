import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

export default function HorizontalLinearStepper() {

  const [inputarr,setInputarr]=useState([])

  const [inputdata,SetInputdata]=useState({
    input: "",
    desc: ""
  })
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = ['Policy Details', 'Policy Configure', 'Assign Nodes','Association',];

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCancel = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function changehandle(e)
  {
    SetInputdata(
    {
      ...inputdata,
      [e.target.name]: e.target.value
    });
  } 

  const handlesubmit=(e)=>{
    
    const input=inputdata.input;
    const desc=inputdata.desc;
    const data = {input,desc};
    if(input!=="" && desc!=="")
    {
      setInputarr([...inputarr,data])
      console.log(input);
      console.log(desc);
      console.log(inputarr);
    }
    localStorage.setItem('data',JSON.stringify(inputarr));
    SetInputdata({
      input: "",
      desc: ""
    });
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
        <React.Fragment>
          <div className='data'>
            <h5>Name</h5>
            <input className='input1' autoComplete='off' type="text" name="input" value={inputdata.input} onChange={changehandle} placeholder="Policy Name"/>
            <h5>Description</h5>
            <input className='input2' autoComplete='off' type="text" name="desc" value={inputdata.desc} onChange={changehandle}/>
          </div>

          {/* {
            inputarr.map((a)=><div>
            <li>{a.input}</li>
            <li>{a.desc}</li>
          </div>)} */}

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          
            <Button className="btn1"
              variant="contained"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button className="btn2" variant="contained" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="btn3" variant="contained" onClick={() => {handleNext();handlesubmit();}}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
            
          </Box>
        </React.Fragment>

        
    </Box>
  );
}