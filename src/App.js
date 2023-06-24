import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import Homepage from './components/homepage/Homepage.js';
import directory from './directory.js';
import BookingPage from './components/bookings/BookingPage.js';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={directory.get('homepage').path} element={<Homepage />} />
          <Route path={directory.get('reservations').path} element={<BookingPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;