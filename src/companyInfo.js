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
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

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
import Avatar from '@mui/material/Avatar';
import NotificationNetworkCheck from 'material-ui/svg-icons/notification/network-check';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import StepConnector from "@material-ui/core/StepConnector";

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

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             width: '100%',
//         },
//         button: {
//             marginTop: theme.spacing(1),
//             marginRight: theme.spacing(1),
//         },
//         actionsContainer: {
//             marginBottom: theme.spacing(2),
//         },
//         resetContainer: {
//             padding: theme.spacing(3),
//         },
//         stepIconRoot: {
//             color: "#008B8B",
//             "&.Mui-active": {
//                 color: "#008B8B"
//             },
//             "&.Mui-completed": {
//                 color: "#008B8B"
//             }
//         },
//         radio: {
//             colorPrimary: {
//                 '&$checked': {
//                     color: '#008B8B'
//                 }
//             },
//             checked: {},
//         }

//     }),
// );

const styles = theme => ({
    root: {
        width: '100%',
    },
    stepIconRoot: {
        color: "#008B8B",
        "&.MuiStepIcon-active": {
            color: "#008B8B"
        },
        "&.MuiStepIcon-completed": {
            color: "#008B8B"
        }
    },
    radio: {
        colorPrimary: {
            '&$checked': {
                color: '#008B8B'
            }
        },
        checked: {},
    }
});

function getSteps() {
    return [<b >Company Information</b>,
    <b>Beneficial Owner(s)</b>,
    ];
}
// const theme = createTheme({
//     components: {
//         MuiDiv: {
//             styleOverrides: {

//                 MuiStepIcon: {
//                     root: {
//                         color: "red",

//                         "&$active": {
//                             color: "teal"
//                         },

//                         "&$completed": {
//                             color: "#C4E90C"
//                         }
//                     },
//                 }
//             }
//         }
//     }
// })

// const Div = styled("div", {
//     name: "MuiDiv",
//     overridesResolver: (props, styles) => {
//         return [styles.root];
//     }
// })();

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: "calc(-50% + 16px)",
        right: "calc(50% + 16px)"
    },
    active: {
        "& $line": {
            borderColor: "#F36633"
        }
    },
    completed: {
        "& $line": {
            borderColor: "#F36633"
        }
    },
    line: {
        borderColor: "#BBBBBB",
        borderTopWidth: 3,
        borderRadius: 1
    }
})(StepConnector);

function CompanyInfo() {


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

    const classes = styles();

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
        else if (!regEmail.test(email)) {
            newErrors.email = 'Email is invalid'
        }

        let regPhone = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        if (phoneNumber === "") {
            newErrors.phoneNumber = 'Phone number is required'
        }
        else if (!regPhone.test(phoneNumber)) {
            newErrors.phoneNumber = 'Phone number is invalid'
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
                <Box sx={{ m: 10 }}>

                    <AddBusinessOutlinedIcon sx={{ fontSize: 100 }} />

                    <h2 style={{}}> New Business Name </h2>

                    {/* <Avatar
                        alt="My React"
                        src="/static/images/avatar/1.jpg"
                        sx={{ p: 5, marginLeft: 5, width: 56, height: 56 }}
                    /> */}
                </Box>

                <Box sx={{ marginTop: 10, bgcolor: 'background.paper' }}>
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

                                    <Stepper activeStep={activeStep} orientation="vertical" >
                                        {steps.map((label, index) => (
                                            <Step key={label}>

                                                <StepLabel StepIconProps={{
                                                    classes: {
                                                        root: classes.stepIconRoot,
                                                        active: classes.stepIconActive,
                                                        completed: classes.stepIconCompleted
                                                    }
                                                }}
                                                >


                                                    {label}

                                                </StepLabel>



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
                                        <TextField
                                            id="outlined-basic" label="Company Name" variant="outlined" onChange={e => setCompanyName(e.target.value)}
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


                                                <Divider textAlign="left" style={{ color: '#008B8B' }}>Upload Required Documents
                                                </Divider>
                                                {/* <TextField className="inputRounded" id="outlined-basic" label="Company W-9" variant="outlined"
                                                /> */}


                                            </Root>
                                            <Box sx={{ p: 2 }}>
                                                <Button variant="contained" style={{
                                                    borderRadius: 18,
                                                    // display: 'none',
                                                    minWidth: 160,
                                                    backgroundColor: "#008B8B",
                                                }} component="span">
                                                    Company W-9
                                                </Button>
                                            </Box>

                                        </label>
                                    </Stack>
                                </Box>

                            </Box>


                        }

                        {activeStep === 1 &&
                            <BeneficialOwner />
                        }

                        <Box sx={{ p: 5, display: 'flex', justifyContent: 'space-between' }}>

                            <Button
                                disabled={activeStep === 0}
                                color="primary"
                                variant="contained"
                                style={{
                                    borderRadius: 18,
                                    minWidth: 160,
                                    backgroundColor: "#008B8B",
                                    color: "white"
                                }}

                                onClick={handleBack}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Back' : 'Cancel'}
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
CompanyInfo.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(CompanyInfo);

