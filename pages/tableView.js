import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

import Form from '../Components/Form/Form.js';
import Table from '../Components/Table/Table.js';

// var time = ['6 am','7 am','8 am', '9 am', '10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm', ];
// var Table = document.getElementById('cookieTable');

// Store.prototype.calcTotals = function(){ //get random intiger and store it in prototype:"numbers"
//   for(var i = 0 ; i < time.length; i++){ //loop iteration for each our
//     var randomCustomers = Math.ceil(Math.random() * (this.max - this.min)) + this.min ;//'this' keyword, followed by assigned variable (A1) then push to array in variable 'customers per hour' (random number)
//     this.cookiesSoldPerHr.push(Math.floor((this.avgCookie * randomCustomers)));
//   }
// };

export default function Home() {
  [tableData, setTableData] = useState(null)
  // need state to read initial table data from and to add table data too
  // request static props on pages to render on client load 
  
  useEffect(() => {
    setTableData({})
    createStore();
  },[])

  function createStore(name, max, min, avg) {
    //array containing objects [{},{},{}]
    let storeData = {
      name: name,
      max: max,
      min: min,
      avg: avg,
      cookiesSoldPerHr: [],
    }
    let time = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm',]
    for (let i = 0; i < time.length; i++) {
      let randomCustomers = Math.ceil(Math.random() * (max - min)) + min;
      storeData.cookiesSoldPerHr.push(Math.floor(avg * randomCustomers));
    }
    setTableData(...tableData, storeData)
  }

  return (
    <>
      <p className='text-center'>Table Page</p>
      <Table data={tableData}/>
      <Form createStore={createStore}/>
    </>
  )
}
