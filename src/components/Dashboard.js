// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import axios from 'axios'; // Import Axios if using it

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(4),
//   },
//   tableContainer: {
//     marginTop: theme.spacing(2),
//   },
// }));

const Dashboard = () => {
//  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        // Using fetch
        // const response = await fetch('http://localhost:8088/api/v1/get/order');
        // const data = await response.json();

        // Using Axios (uncomment if using Axios)
        // const response = await axios.get('http://localhost:8088/api/v1/get/order');
        // const data = response.data;

        // For demonstration, let's use mock data
        const data = [
          { orderNumber: '123456', customerName: 'John Doe', date: '2023-01-01', paymentMethod: 'Credit Card', otherInfo: 'Some additional info' },
          // Add more orders as needed
        ];

        setOrders(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Container component="main" maxWidth="lg" style={{ alignItems: 'center', marginTop: '100px' }} >
      <div>
        <Typography variant="h5" gutterBottom align='center'>
          LPG Gas Booking Orders
        </Typography>
        <TableContainer component={Paper} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Number</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Other Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.orderNumber}>
                  <TableCell>{order.orderNumber}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell>{order.otherInfo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default Dashboard;
