import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';

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
function createData2(apilist
) {
    return {
        apilist
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
    createData2('api_call.list.exeternal_service'),
    createData2('api_call.list.exeternal_service'),
    createData2('api_call.list.exeternal_service'),


];
export default function Activity() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const [value, setValue] = React.useState([null, null]);


    return (



        <Paper sx={{ p: 20, marginLeft: 40, marginTop: 10, marginRight: 1, width: '55%', flexGrow: 1 }} >


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
                    <Box sx={{ width: '100%' }} >


                        <Table sx={{ minWidth: 450 }} aria-label="simple table">

                            <TableHead>
                                <TableRow>
                                    <TableCell>Transaction Type</TableCell>
                                    <TableCell align="right">Trans.Count</TableCell>

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
                        <Table sx={{ minWidth: 450 }} aria-label="simple table">

                            <TableHead>
                                <TableRow>
                                    <TableCell>Recent Transactions</TableCell>
                                    <TableCell align="right">Trans.Type</TableCell>
                                    <TableCell align="right">Amount</TableCell>

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

            <Paper sx={{ p: 5, height: 200, marginLeft: 2, marginTop: 10, width: '100 %', flexGrow: 1 }} >
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>API Call Breakdown</TableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows2.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.apilist}
                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>



        </Paper >

    );
}