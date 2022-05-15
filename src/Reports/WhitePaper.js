import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Navbar from '../components/Navbar'
import './WhitePaper.css';


export default function exampleReport() {
  const [noOfPages, setNoOfPages] = useState(null);
  // To load the pages based on available number of pages
  function onDocumentLoadSuccess({ numPages }) {
    setNoOfPages(numPages);
  }

  return (
    <>
      <Navbar />
      <div className='container' >
        <div className='row middle-xs' >
          <div className="col">
            <Document file="/pdf/MyBitcoin.pdf" onLoadSuccess={onDocumentLoadSuccess} >
              {Array.from(new Array(noOfPages),
                (el, index) => (<Page size="A3" pageNumber={index + 1} key={index + 1}
                  width={100} scale={10} alignment={'center'}
                />),
              )}
            </Document>
          </div>
        </div>
      </div>
    </>

  );
}
