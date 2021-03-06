import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import useState from 'react';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { bgcolor } from '@mui/system';

const options = [
    'Today',
    'Yesterday',
    'Last 7 Days',
    'Month to Date(MTD)',
    'Last Month',
    'Custom Date Range',

];


function getFullName(params) {
    return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

const columns = [
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'fullName',
        headerName: 'Full name',
        width: 160,
        valueGetter: getFullName,
    },
];

function createData(recenttransaction, transactiontype, amount) {
    return { recenttransaction, transactiontype, amount };

}
function createData1(transtype, transcount
) {
    return {
        transtype, transcount
    };

}
function createData2(apilist, count
) {
    return {
        apilist, count
    };

}
const rows = [

    createData('02/03 @ 12:55pm', 'Transfer', 4000),
    createData('02/03 @ 12:55pm', 'Transfer', 4000),
    createData('02/03 @ 12:55pm', 'Transfer', 4000),
    createData('02/03 @ 12:55pm', 'Transfer', 4000),

    createData('02/03 @ 12:55pm', 'Transfer', 4000),
    createData('02/03 @ 12:55pm', 'Transfer', 4000),
    createData('02/03 @ 12:55pm', 'Transfer', 4000),
    createData('02/03 @ 12:55pm', 'Transfer', 4000),

];
const rows1 = [
    createData1('Wallet Transfers', 240),
    createData1('Deposits', 20),
    createData1('Withdraws', 35),
];


const rows2 = [
    createData2('api_call.list.exeternal_service', 20),
    createData2('api_call.list.exeternal_service', 25),
    createData2('api_call.list.exeternal_service', 45),


];

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));




export default function Activity() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const [anchorEl, setAnchorEl] = React.useState(null);
    //const open = Boolean(anchorEl);
    const [open, setOpen] = React.useState(false);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [placement, setPlacement] = React.useState();
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClickListItem = (event) => {
    //     setAnchorEl(event.currentTarget);

    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    // const handleMenuItemClick = (event, index) => {
    //     setSelectedIndex(5);
    //     setAnchorEl(null);
    // };
    const [value, setValue] = React.useState([null, null]);
    const [customDateRange, setCustomDateRange] = React.useState(false);

    return (


        <Paper sx={{ marginLeft: 10, marginTop: 2, maxWidth: '60%', height: '100% ', flexGrow: 1 }} >

            <h1 style={{ marginLeft: 5, color: '#008B8B', marginBottom: 50 }}>Ecosystem Activity</h1>



            <Stack direction="row" spacing={1}>
                <Chip sx={{
                    color: "black",
                    bgcolor: '#b2d8d8',
                    marginLeft: 1
                }} label="Activity Dashboard" />
            </Stack>

            <div>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >

                        <Typography sx={{ color: 'text.secondary' }}>Today</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ width: 500 }}>
                            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper>


                                            <Typography>

                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <StaticDateRangePicker
                                                        displayStaticWrapperAs="desktop"
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        renderInput={(startProps, endProps) => (
                                                            <React.Fragment>
                                                                <TextField {...startProps} />
                                                                <Box sx={{ mx: 2 }}> to </Box>
                                                                <TextField {...endProps} />
                                                            </React.Fragment>
                                                        )}
                                                    />
                                                </LocalizationProvider>
                                            </Typography>
                                        </Paper>
                                    </Fade>
                                )}
                            </Popper>
                            <Grid container justifyContent="center">
                                <ListItemText>
                                    <Grid item>
                                        <Button onClick={handleClick('bottom-end')}>Today</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleClick('bottom-end')}>Yesterday</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleClick('bottom-end')}>Last 7 days</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleClick('bottom-end')}>Month to Date</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={handleClick('bottom-end')}>Last Month</Button>
                                    </Grid>

                                    <Grid item>
                                        <Button onClick={handleClick('bottom-end')}>Custom Date Range</Button>
                                    </Grid>
                                </ListItemText>
                            </Grid>
                        </Box>
                    </AccordionDetails>
                </Accordion>

            </div>










            <TableContainer component={Paper}  >
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ paddingRight: 10 }} >


                        <Table sx={{ minWidth: 450 }} aria-label="simple table">

                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ color: '#008B8B' }}><b>Transaction Type</b></TableCell>
                                    <TableCell style={{ color: '#008B8B' }} align="right"> <b>Trans.Count</b> </TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows1.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.transtype}
                                        </TableCell>
                                        <TableCell align="right">{row.transcount}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box >
                    <Box sx={{ width: '100%' }}>
                        <Table sx={{ maxWidth: 550 }} aria-label="simple table">

                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ color: '#008B8B' }}> <b>Recent Transactions </b></TableCell>
                                    <TableCell style={{ color: '#008B8B' }} align="right"><b>Trans.Type </b></TableCell>
                                    <TableCell style={{ color: '#008B8B' }} align="right"><b>Amount </b></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.recenttransaction}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.recenttransaction}
                                        </TableCell>
                                        <TableCell align="right">{row.transactiontype}</TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </TableContainer>
            <h1 style={{ color: '#008B8B', marginTop: 50 }}>API Call History</h1>
            <Paper sx={{ height: 250, width: '100%', flexGrow: 1, display: 'flex', justifyContent: 'space-between' }} >
                <Box sx={{ paddingLeft: 20, paddingbottom: 40, }}><h4 style={{ color: '#008B8B' }}>API Calls
                    <p><h1 style={{ color: 'black' }}>17,889,208</h1></p></h4>
                </Box>
                <Box sx={{ paddingRight: 50, }} >
                    <Table sx={{ minWidth: 250 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: '#008B8B' }} ><b>API Call Breakdown </b></TableCell>



                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows2.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.apilist}
                                    </TableCell>
                                    <TableCell >
                                        {row.count}
                                    </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>


                    </Table>

                </Box>
            </Paper>



        </Paper >

    );
}