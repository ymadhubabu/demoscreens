import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



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

    return (


        <Paper sx={{ p: 20, marginLeft: 40, marginTop: 10, marginRight: 1, width: '55%', flexGrow: 1 }} >


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