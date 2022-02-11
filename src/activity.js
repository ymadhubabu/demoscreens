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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const rows2 = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),

];
export default function Activity() {

    return (


        <Paper sx={{ p: 30, marginLeft: 40, marginTop: 30, width: 800, flexGrow: 1 }} >


            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="left">Calories</TableCell>
                            <TableCell align="left">Fat(g)</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows2.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                                <TableCell align="left">{row.fat}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Paper sx={{ p: 5, height: 200, marginLeft: 2, marginTop: 10, width: '100 %', flexGrow: 1 }} >
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="left">Calories</TableCell>
                            <TableCell align="left">Fat(g)</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows2.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                                <TableCell align="left">{row.fat}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>



        </Paper>

    );
}