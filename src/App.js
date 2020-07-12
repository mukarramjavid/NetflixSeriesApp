import React from 'react';
import './App.css';
import Cards from './Components/Card';
import {Alert} from 'react-bootstrap'

function App() {
  return (
    <>
    <Alert variant='dark'>
         <h1 className="title">Top 5 Netflix Series</h1>
    </Alert>
    <Cards/>
    </>
  );
}

export default App;
