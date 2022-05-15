import React from 'react';
 // eslint-disable-next-line
import PDFViewer from 'pdf-viewer-reactjs'
import Navbar from './components/Navbar';
import DashBoard from './Dashboard/DashBoard'
import './App.css';

function App() {

  return (
    <div className="login-background " >
      <Navbar />
      <DashBoard/>
    </div>
  )
};
export default App;