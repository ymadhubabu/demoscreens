import React from 'react';
import { makeStyles, Theme, createStyles }
    from '@material-ui/core/styles';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },

    }),
);



function getSteps() {
    return [<b >Company Information</b>,
    <b >Beneficial Owner(s)</b>,
    ];
}



// function getStepContent(step: number) {
//     switch (step) {
//         case 0:
//             return (
//                 <form class="form-group">
//                     <label>First Name</label>
//                     <input type="text" placeholder="First Name"></input>
//                     <br></br>
//                     <label>Last Name</label>
//                     <input type="text" placeholder="Last Name"></input>
//                 </form>
//             );
//         case 1:
//             return (
//                 <form class="form-group">
//                     <label>High School Percentage</label>
//                     <input type="number" placeholder="High School Percentage"></input>
//                     <br></br>
//                     <label>Graduation percentage</label>
//                     <input type="number" placeholder="Graduation Percentage"></input>
//                 </form>
//             );
//         case 2:
//             return (
//                 <form class="form-group">
//                     <label>Permanent Address</label>
//                     <input type="text" placeholder="Permanent Address"></input>
//                     <br></br>
//                     <label>Temporary Address</label>
//                     <input type="text" placeholder="Temporary Address"></input>
//                 </form>
//             );
//         default:
//             return 'Unknown step';
//     }
// }

export default function BeneficialOwner() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 700, flexGrow: 1 }}>





            <div className={classes.actionsContainer}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className={classes.root}>
                        <h1>Business Application</h1>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        <TextField id="outlined-basic" label="SSN" variant="outlined" />
                        <TextField id="outlined-basic" label="Ownership %" variant="outlined" />
                        <TextField id="outlined-basic" label="Mailing Adress Line1" variant="outlined" />
                        <TextField id="outlined-basic" label="Mailing Address Line2(Optional)" variant="outlined" />
                        <TextField id="outlined-basic" label="City" variant="outlined" />
                        <TextField id="outlined-basic" label="State" variant="outlined" />
                        <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
                        <TextField id="outlined-basic" label="Country" variant="outlined" />






                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                </Box>
            </div>
        </Paper>






        //  activeStep === steps.length && (
        // <Paper square elevation={0} className={classes.resetContainer}>
        //     <Typography>Form is submitted</Typography>
        //     <Button onClick={handleReset} className={classes.button}>
        //         Reset
        //     </Button>
        //     )

        // </div >
        // </Paper >

    );
}

