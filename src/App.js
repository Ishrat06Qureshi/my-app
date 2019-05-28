import React from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button , C } from 'react-bootstrap';
import StudentData from './Components/StudentData/studentdata'
import ShowData from './Components/ShowData/Showdata'

function App() {
  return (
    <div className="App">
     <StudentData/>
     {/* <ShowData/> */}
    </div>
  );
}

export default App;
