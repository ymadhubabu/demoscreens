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
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { withStyles } from "@material-ui/core/styles";

import { color } from '@mui/system';
import { StylesContext } from '@material-ui/styles';

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

    }),
);



function getSteps() {
    return [<b >Company Information</b>,
    <b >Beneficial Owner(s)</b>,
    ];
}

export default function BeneficialOwner() {


    const [expanded, setExpanded] = React.useState(-1);

    const handleChange1 = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : -1);
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
    const [beneficialOwner, setBeneficialOwner] = React.useState([]);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [ownerShip, setOwnerShip] = React.useState("");
    const firstRender = useRef(true);
    const [addBenificial, setAddBenificial] = React.useState(false);

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


    const handleSave = () => {
        setBeneficialOwner([...beneficialOwner, {
            firstName: firstName,
            lastName: lastName,
            ownerShip: ownerShip
        }]);
        setAddBenificial(false);

        console.log('benificial-owners --> ' + beneficialOwner);
    };

    const handleRemove = (id) => {
        console.log('handleRemove.....' + id);

        let tempBen = [...beneficialOwner];
        tempBen.splice(id, 1);
        setBeneficialOwner(tempBen);

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

    const handleAddBenificial = () => {
        setAddBenificial(true);
    };

    return (

        <Box>
            {
                beneficialOwner.length > 0 && <Paper>
                    <div>
                        {beneficialOwner.map((item, index) => (
                            <Accordion sx={{ marginBottom: 2 }} expanded={expanded === index} onChange={handleChange1(index)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <h4 style={{ color: '#008B8B', marginLeft: 5 }}>Beneficial Owner : {item.firstName} {item.lastName} </h4>
                                        <h4 style={{ color: '#008B8B', marginRight: 5 }}> OwnerShip : {item.ownerShip}% </h4>
                                    </Box>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 2, width: '200' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="First Name" name="firstName" variant="outlined" value={item.firstName} onChange={e => setFirstName(e.target.value)} />
                                        <TextField id="outlined-basic" label="Last Name" name="lastName" variant="outlined" onChange={e => setLastName(e.target.value)} />
                                        <TextField id="outlined-basic" label="SSN" variant="outlined" />
                                        <TextField id="outlined-basic" label="OwnerShip %" name="ownerShip" variant="outlined" onChange={e => setOwnerShip(e.target.value)} />
                                        <TextField id="outlined-basic" label="Mailing Adress Line1" variant="outlined" />
                                        <TextField id="outlined-basic" label="Mailing Address Line2(Optional)" variant="outlined" />
                                        <TextField id="outlined-basic" label="City" variant="outlined" />
                                        <TextField id="outlined-basic" label="State" variant="outlined" />
                                        <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
                                        <TextField id="outlined-basic" label="Country" variant="outlined" />
                                    </Box>

                                    <Box sx={{ p: 1, m: 1, display: 'flex', justifyContent: 'space-between' }}>
                                        <Button style={{
                                            borderRadius: 18,
                                            minWidth: 160,
                                            backgroundColor: "#008B8B",
                                        }} variant="contained" onClick={() => handleRemove(index)} >Remove Beneficial Owner</Button>
                                        <Button variant="contained" onClick={handleSave} style={{
                                            borderRadius: 18,
                                            minWidth: 160,
                                            backgroundColor: "#008B8B",
                                        }} >Save</Button>

                                    </Box>
                                </AccordionDetails>

                            </Accordion>
                        ))}
                    </div>
                </Paper>
            }
            {
                addBenificial && <Paper sx={{ marginTop: 5 }} >
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
                            <Accordion expanded onChange={handleChange1('panel1')}>
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

                                            <Box sx={{ m: 1, display: 'flex', justifyContent: "space-between" }}>
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

                                            <Box sx={{ p: 1, m: 2, display: 'flex', justifyContent: 'flex-end' }}>

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
            }



            <Box textAlign='center' ><Button variant='outlined' style={{
                marginTop: 10,
                borderRadius: 18,

            }} onClick={handleAddBenificial}>+ Add Additional Beneficial Owner</Button></Box>
        </Box >


    );
}

