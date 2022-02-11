import React from 'react';
import { makeStyles, Theme, createStyles }
    from '@material-ui/core/styles';
import { Container } from '@material-ui/core';


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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import MenuItem from '@mui/material/MenuItem';


const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
];

const MAX_LENGTH = 10;





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
    <b>Beneficial Owner(s)</b>,
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

export default function CompanyInfo() {

    const [text, setText] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    React.useEffect(() => {
        // Set errorMessage only if text is equal or bigger than MAX_LENGTH
        if (text.length >= MAX_LENGTH) {
            setErrorMessage(
                "The input has exceeded the maximum number of characters"
            );
        }
    }, [text]);

    React.useEffect(() => {
        // Set empty erroMessage only if text is less than MAX_LENGTH
        // and errorMessage is not empty.
        // avoids setting empty errorMessage if the errorMessage is already empty
        if (text.length < MAX_LENGTH && errorMessage) {
            setErrorMessage("");
        }
    }, [text, errorMessage]);


    const [builderEntity, setBuilderEntity] = React.useState('');

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleChange = (event) => {
        setBuilderEntity(event.target.value);
    };
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

        <Paper sx={{ display: "flex", height: 800 }}>

            <Paper sx={{ p: 5, width: 150 }} >


                <Box sx={{ bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DynamicFormOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Business Application" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        < LocalActivityOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Ecosystem Activity" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Box>
            </Paper>

            <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                <Paper sx={{ marginLeft: 5, marginBottom: 2, marginTop: 2 }}>
                    <div style={{ marginLeft: 20 }}><h4>Welcome to</h4></div>
                </Paper>

                <Paper sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Paper sx={{ p: 2, marginLeft: 5, width: 150, flexGrow: 1 }}>



                        <div className={classes.actionsContainer}>


                            <Box
                                component="form"
                                sx={{ bgcolor: 'background.paper' }}
                                noValidate
                                autoComplete="off"
                            >
                                <div className={classes.root}>
                                    <h4>Business Application</h4>
                                    <Stepper activeStep={activeStep} orientation="vertical">
                                        {steps.map((label, index) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>

                                </div>
                            </Box>

                        </div>

                    </Paper>

                    <Paper sx={{ p: 5, width: 800, flexGrow: 1 }} >
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '200' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <h4>Company Information </h4>

                            <TextField
                                error={text.length >= MAX_LENGTH}
                                id="outlined-error"
                                label="Error"
                                helperText={errorMessage}
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                            />

                            <TextField id="outlined-basic" label="Company Name" variant="outlined" />
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Business Entity"
                                value={builderEntity}
                                onChange={handleChange}
                                helperText="Please select your Business Entity"
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>                            <TextField id="outlined-basic" label="Company Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Company Phone Number" variant="outlined" />
                            <TextField id="outlined-basic" label="Company Adress Line1" variant="outlined" />
                            <TextField id="outlined-basic" label="Company Address Line2(Optional)" variant="outlined" />
                            <TextField id="outlined-basic" label="City" variant="outlined" />
                            <TextField id="outlined-basic" label="State" variant="outlined" />
                            <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
                            <TextField id="outlined-basic" label="Country" variant="outlined" />
                        </Box>

                        <Box sx={{ p: 5, display: 'flex', justifyContent: 'space-between' }}>
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
                        </Box>

                    </Paper>
                </Paper>
            </Paper>



        </Paper >

    );
}


