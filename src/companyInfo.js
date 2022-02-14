import React, { useEffect, useRef } from 'react';
import { makeStyles, Theme, createStyles }
    from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from "prop-types";

import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

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
import BusinessIcon from '@mui/icons-material/Business';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import MenuItem from '@mui/material/MenuItem';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import useState from 'react';
import isMobilePhone from 'validator/lib/isMobilePhone';
import Stack from '@mui/material/Stack';
import BeneficialOwner from './beneficialOwner'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { withStyles } from "@material-ui/core/styles";
import { color } from '@mui/system';
import { StylesContext } from '@material-ui/styles';


const businessentity = [
    {
        value: 'Sole Proprietorship/Single',
        label: 'Sole Proprietorship/Single',
    },
    {
        value: 'Paternship',
        label: 'Paternship',
    },
];


const Input = styled('input')({
    display: 'none',
});

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

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
        stepIconRoot: {
            color: "pink",
            "&.MuiStepIcon-active": {
                color: "red"
            },
            "&.MuiStepIcon-completed": {
                color: "green"
            }
        },
        radio: {
            colorPrimary: {
                '&$checked': {
                    color: 'teal'
                }
            },
            checked: {},
        }

    }),
);

// const styles = theme => ({
//     root: {
//         width: '100%',
//     },
//     stepIconRoot: {
//         color: "pink",
//         "&.MuiStepIcon-active": {
//             color: "red"
//         },
//         "&.MuiStepIcon-completed": {
//             color: "green"
//         }
//     },
//     radio: {
//         colorPrimary: {
//             '&$checked': {
//                 color: 'blue'
//             }
//         },
//         checked: {},
//     }
// });

function getSteps() {
    return [<b >Company Information</b>,
    <b>Beneficial Owner(s)</b>,
    ];
}


export default function CompanyInfo() {


    const [expanded, setExpanded] = React.useState(false);

    const handleChange1 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [companyName, setCompanyName] = React.useState("");
    const [businessEntity, setBusinessEntity] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [addressLine1, setAddressLine1] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [zipCode, setZipCode] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
    const [errors, setErrors] = React.useState("");
    const [beneficialOwner, setBeneficialOwner] = React.useState([{}]);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [ownerShip, setOwnerShip] = React.useState("");
    const firstRender = useRef(true);

    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleChange = (event) => {
        setBusinessEntity(event.target.value);
    };



    const formValidation = () => {

        let newErrors = {}
        if (companyName === "") {
            newErrors.companyName = 'Company name is required'
        }

        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (email === "") {
            newErrors.email = 'Email is required'
        }
        else if (!regEmail.test.email) {
            newErrors.email = 'Email is invalid'
        }

        if (phoneNumber === "") {
            newErrors.phoneNumber = 'Phone number is required'
        }
        if (state === "") {
            newErrors.state = 'State is required'
        }
        if (addressLine1 === "") {
            newErrors.addressLine1 = 'Address Line1  is required'
        }
        if (city === "") {
            newErrors.city = 'City is required'
        }
        if (zipCode === "") {
            newErrors.zipCode = 'Zip code is required'
        }
        if (country === "") {
            newErrors.country = 'Country is required'
        }


        setErrors(newErrors)
    }





    useEffect(() => {


        // we want to skip validation on first render
        if (firstRender.current) {
            firstRender.current = false
            return
        }

        // here we can disable/enable the save button by wrapping the setState function
        // in a call to the validation function which returns true/false
        //setDisabled(formValidation())
        formValidation();

    }, [companyName, email, phoneNumber, addressLine1, state, city, zipCode, country]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleSave = () => {
        setBeneficialOwner([...beneficialOwner, {
            firstName: firstName,
            lastName: lastName,
            ownerShip: ownerShip
        }]);


        console.log('benificial-owners --> ' + beneficialOwner);
    };
    const handleRemove = () => {
        console.log('handleRemove.....');

    };


    return (

        <Paper sx={{ display: "flex", height: '100%', width: '100%' }}>

            <Paper sx={{ p: 5, width: '15%' }} >


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

            <Paper sx={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                <Paper sx={{ marginLeft: 5, marginBottom: 2, marginTop: 2 }}>
                    <div style={{ marginLeft: 20 }}><h4>Welcome to</h4></div>
                </Paper>

                <Paper sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Paper sx={{ p: 2, marginLeft: 5, width: '20%', flexGrow: 1 }}>



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
                                                <StepLabel StepIconProps={{
                                                    classes: {
                                                        root: classes.stepIconRoot,
                                                        active: classes.stepIconActive,
                                                        completed: classes.stepIconCompleted
                                                    }
                                                }}>
                                                    {label}</StepLabel>

                                            </Step>
                                        ))}
                                    </Stepper>

                                </div>
                            </Box>

                        </div>

                    </Paper>


                    <Paper sx={{ p: 5, width: '80%', flexGrow: 1 }} >

                        {activeStep === 0 &&
                            <Box>
                                <Box


                                    component="form"
                                    sx={{

                                        '& .MuiTextField-root': { m: 1, width: '200' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <h4 style={{ color: '#008B8B' }}>Company Information </h4>


                                    <div className="inputRounded">
                                        <TextField id="outlined-basic" label="Company Name" variant="outlined" onChange={e => setCompanyName(e.target.value)}
                                            error={errors.companyName !== undefined} helperText={errors.companyName} />
                                        <TextField id="outlined-select-entity"
                                            select
                                            label="Business Entity"
                                            defaultValue="Sole Proprietorship/Single"

                                        >
                                            {businessentity.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))
                                            }

                                        </TextField>
                                        <FormControl>

                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="SSN" control={<Radio disableRipple classes={{ colorPrimary: classes.radio }} size="small" />} label="SSN" />
                                                <FormControlLabel value="EIN/TIN" control={<Radio disableRipple classes={{ colorPrimary: classes.radio }} size="small" />} label="EIN /TIN" />

                                            </RadioGroup>
                                        </FormControl>
                                        <TextField id="outlined-basic" label="Company Email" variant="outlined"
                                            error={errors.email !== undefined}
                                            helperText={errors.email} onChange={e => setEmail(e.target.value)}

                                        />

                                        <TextField id="outlined-basic" label="Company Phone Number" variant="outlined"
                                            error={errors.phoneNumber !== undefined} helperText={errors.phoneNumber} onChange={e => setPhoneNumber(e.target.value)}

                                        />
                                        <TextField name="companyAddressLine1" id="outlined-basic" label="Company Adress Line1" variant="outlined"
                                            error={errors.addressLine1 !== undefined} helperText={errors.addressLine1} onChange={e => setAddressLine1(e.target.value)}

                                        />

                                        <TextField id="outlined-basic" label="Company Address Line2(Optional)" variant="outlined"

                                        />
                                        <TextField id="outlined-basic" label="City" variant="outlined"
                                            error={errors.city !== undefined} helperText={errors.city} onChange={e => setCity(e.target.value)}

                                        />
                                        <TextField id="outlined-basic" label="State" variant="outlined"
                                            error={errors.state !== undefined} helperText={errors.state} onChange={e => setState(e.target.value)}

                                        />
                                        <TextField id="outlined-basic" label="Zip Code" variant="outlined"
                                            error={errors.zipCode !== undefined} helperText={errors.zipCode} onChange={e => setZipCode(e.target.value)}

                                        />
                                        <TextField id="outlined-basic" label="Country" variant="outlined"
                                            error={errors.country !== undefined} helperText={errors.country} onChange={e => setCountry(e.target.value)}
                                        />

                                    </div>
                                </Box>

                                <Box sx={{ p: 4 }}>
                                    <Stack direction="column" alignItems="left" spacing={5}>
                                        <label htmlFor="contained-button-file">

                                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                            <Root>
                                                <Divider textAlign="left" style={{ color: '#008B8B' }}>Upload Required Documents</Divider>


                                            </Root>
                                            <Box sx={{ p: 2 }}>
                                                <Button variant="contained" style={{
                                                    borderRadius: 18,
                                                    minWidth: 160,
                                                    backgroundColor: "#008B8B",
                                                }} component="span">
                                                    Upload
                                                </Button>
                                            </Box>
                                        </label>
                                    </Stack>
                                </Box>
                            </Box>

                        }

                        {activeStep === 1 &&
                            <Box>


                                {
                                    beneficialOwner.length > 0 && <Paper>


                                        <div>
                                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange1('panel2')}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                        <h4 style={{ color: '#008B8B' }}>Beneficial Owner</h4>
                                                    </Typography> */}
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {beneficialOwner.map((item, index) => (

                                                        <Paper sx={{ display: 'flex', justifyContent: 'space-between' }}>


                                                            <h4 style={{ marginLeft: 20 }}>Beneficial Owner : {item.firstName} {item.lastName} </h4>
                                                            <h4 style={{ marginRight: 20 }}> OwnerShip : {item.ownerShip}% </h4>
                                                            {/* <tr data-index={index}>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.ownerShip}</td>
                                                </tr> */}

                                                        </Paper>
                                                    ))}
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </Paper>
                                }

                                <Paper sx={{ marginTop: 5 }} >
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 2, width: '200' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        {/* <h4>Beneficial Owner</h4> */}

                                        <div>
                                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange1('panel1')}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                        <h4 style={{ color: '#008B8B' }}>Beneficial Owner</h4>                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div className="inputRounded">

                                                        <TextField id="outlined-basic" label="First Name" name="firstName" variant="outlined" onChange={e => setFirstName(e.target.value)} />
                                                        <TextField id="outlined-basic" label="Last Name" name="lastName" variant="outlined" onChange={e => setLastName(e.target.value)} />
                                                        <TextField id="outlined-basic" label="SSN" variant="outlined" />
                                                        <TextField id="outlined-basic" label="OwnerShip %" name="ownerShip" variant="outlined" onChange={e => setOwnerShip(e.target.value)} />
                                                        <TextField id="outlined-basic" label="Mailing Adress Line1" variant="outlined" />
                                                        <TextField id="outlined-basic" label="Mailing Address Line2(Optional)" variant="outlined" />
                                                        <TextField id="outlined-basic" label="City" variant="outlined" />
                                                        <TextField id="outlined-basic" label="State" variant="outlined" />
                                                        <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
                                                        <TextField id="outlined-basic" label="Country" variant="outlined" />
                                                    </div>

                                                    <Stack direction="column" alignItems="left" spacing={5}>
                                                        <label htmlFor="contained-button-file">
                                                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                                            <Root>
                                                                <Divider textAlign="left" style={{ color: '#008B8B' }}>Upload Required Documents</Divider>


                                                            </Root>


                                                            <Box sx={{ p: 4, display: 'flex', justifyContent: "space-between" }}>
                                                                <FormControl>
                                                                    <FormLabel id="demo-form-control-label-placement">Select Identification to Upload:</FormLabel>
                                                                    <RadioGroup
                                                                        row
                                                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                                                        name="row-radio-buttons-group"
                                                                        defaultValue="top"
                                                                    >
                                                                        <FormControlLabel
                                                                            value="top"
                                                                            control={<Radio />}
                                                                            label="Driver's License"
                                                                            labelPlacement="end"
                                                                        />
                                                                        <FormControlLabel
                                                                            value="end"
                                                                            control={<Radio />}
                                                                            label="State-Issued ID"
                                                                            labelPlacement="end"
                                                                        />
                                                                        <FormControlLabel
                                                                            value="side"
                                                                            control={<Radio />}
                                                                            label="PassPort"
                                                                            labelPlacement="end"
                                                                        />
                                                                    </RadioGroup>
                                                                </FormControl>
                                                                <Button style={{
                                                                    borderRadius: 18,
                                                                    minWidth: 160,
                                                                    height: 35,
                                                                    backgroundColor: "#008B8B",
                                                                    marginRight: 20,
                                                                }} variant="contained" component="span">
                                                                    Upload

                                                                </Button>
                                                            </Box>

                                                            <Box sx={{ p: 2, m: 5, display: 'flex', justifyContent: 'space-between' }}>
                                                                <Button style={{
                                                                    borderRadius: 18,
                                                                    minWidth: 160,
                                                                    backgroundColor: "#008B8B",
                                                                }} variant="contained" onClick={handleRemove} >Remove Beneficial Owner</Button>
                                                                <Button variant="contained" onClick={handleSave} style={{
                                                                    borderRadius: 18,
                                                                    minWidth: 160,
                                                                    backgroundColor: "#008B8B",
                                                                }} >Save</Button>

                                                            </Box>
                                                        </label>


                                                    </Stack>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>


                                    </Box>











                                </Paper>




                                <Box textAlign='center' ><Button variant='outlined' style={{
                                    borderRadius: 18,

                                }} >+ Add Additional Beneficial Owner</Button></Box>
                            </Box>

                        }

                        <Box sx={{ p: 5, display: 'flex', justifyContent: 'space-between' }}>

                            <Button
                                //disabled={activeStep === 0}
                                color="primary"
                                variant="contained"
                                style={{
                                    borderRadius: 18,
                                    minWidth: 160,
                                    backgroundColor: "#008B8B",

                                }}

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
                                style={{
                                    borderRadius: 18,
                                    minWidth: 160,
                                    backgroundColor: "#008B8B",
                                }} >


                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>

                        </Box>


                    </Paper>
                </Paper>
            </Paper >



        </Paper >

    );
}
