import React from 'react';
import { makeStyles, Theme, createStyles }
    from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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

    }),
);





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

    const [name, setName] = React.useState("");
    const [entity, setEntity] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address1, setAddress1] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    const [benificiars, setBenificiars] = React.useState([]);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [ownership, setOwnerShip] = React.useState("");

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const handleChange = (event) => {
        setEntity(event.target.value);
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

    const handleSave = () => {
        var tempArr = benificiars;
        tempArr.push({
            firstName: firstName,
            lastName: lastName,
            ownership: ownership
        });

        setBenificiars(tempArr);

        console.log('benificiars --> ' + benificiars);
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
                                                <StepLabel>{label}</StepLabel>
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
                                    <h4>Company Information </h4>



                                    <TextField id="outlined-basic" label="Company Name" variant="outlined" />
                                    <TextField id="outlined-select-entity"
                                        select
                                        label="Business Entity"
                                        defaultValue="Sole Proprietorship/Single"

                                    >
                                        {businessentity.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}

                                    </TextField>
                                    <FormControl>

                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="SSN" control={<Radio size="small" />} label="SSN" />
                                            <FormControlLabel value="EIN/TIN" control={<Radio size="small" />} label="EIN /TIN" />

                                        </RadioGroup>
                                    </FormControl>
                                    <TextField id="outlined-basic" label="Company Email" variant="outlined"

                                    />
                                    <TextField id="outlined-basic" label="Company Phone Number" variant="outlined"

                                    />
                                    <TextField name="companyAddressLine1" id="outlined-basic" label="Company Adress Line1" variant="outlined"

                                    />
                                    <TextField id="outlined-basic" label="Company Address Line2(Optional)" variant="outlined"

                                    />
                                    <TextField id="outlined-basic" label="City" variant="outlined"

                                    />
                                    <TextField id="outlined-basic" label="State" variant="outlined"

                                    />
                                    <TextField id="outlined-basic" label="Zip Code" variant="outlined"

                                    />
                                    <TextField id="outlined-basic" label="Country" variant="outlined" />


                                </Box>

                                <Box sx={{ p: 4 }}>
                                    <Stack direction="column" alignItems="left" spacing={5}>
                                        <label htmlFor="contained-button-file">

                                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                            <Root>
                                                <Divider textAlign="left">Upload Required Documents</Divider>


                                            </Root>
                                            <Box sx={{ p: 2 }}>
                                                <Button variant="contained" component="span">
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
                                    benificiars.length > 0 && <Paper>


                                        {benificiars.map((item, index) => (

                                            <Paper sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <h4 style={{ marginLeft: 20 }}>Benificial Owner : {item.firstName} {item.lastName} </h4>
                                                <h4 style={{ marginRight: 20 }}> Ownership : {item.ownership}% </h4>
                                                {/* <tr data-index={index}>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.ownership}</td>
                                                </tr> */}
                                            </Paper>
                                        ))}

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
                                                        Beneficial Owner
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <TextField id="outlined-basic" label="First Name" name="firstName" variant="outlined" onChange={e => setFirstName(e.target.value)} />
                                                    <TextField id="outlined-basic" label="Last Name" name="lastName" variant="outlined" onChange={e => setLastName(e.target.value)} />
                                                    <TextField id="outlined-basic" label="SSN" variant="outlined" />
                                                    <TextField id="outlined-basic" label="Ownership %" name="ownership" variant="outlined" onChange={e => setOwnerShip(e.target.value)} />
                                                    <TextField id="outlined-basic" label="Mailing Adress Line1" variant="outlined" />
                                                    <TextField id="outlined-basic" label="Mailing Address Line2(Optional)" variant="outlined" />
                                                    <TextField id="outlined-basic" label="City" variant="outlined" />
                                                    <TextField id="outlined-basic" label="State" variant="outlined" />
                                                    <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
                                                    <TextField id="outlined-basic" label="Country" variant="outlined" />

                                                    <Stack direction="column" alignItems="left" spacing={5}>
                                                        <label htmlFor="contained-button-file">
                                                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                                            <Root>
                                                                <Divider textAlign="left">Upload Required Documents</Divider>


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
                                                                <Button variant="contained" component="span">
                                                                    Upload
                                                                </Button>

                                                            </Box>
                                                        </label>


                                                    </Stack>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>


                                    </Box>





                                    <Box sx={{ p: 2, m: 5, display: 'flex', justifyContent: 'space-between' }}>
                                        <Button variant="contained" onClick={handleRemove} >Remove Benificial Owner</Button>
                                        <Button variant="contained" onClick={handleSave} >Save</Button>

                                    </Box>





                                </Paper>




                                <Box textAlign='center' ><Button>+ Add Additional Benificial Owner</Button></Box>
                            </Box>

                        }

                        <Box sx={{ p: 5, display: 'flex', justifyContent: 'space-between' }}>

                            <Button
                                disabled={activeStep === 0}
                                color="primary"
                                variant="contained"

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
            </Paper >



        </Paper >

    );
}


