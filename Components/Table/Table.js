import TableComp from 'react-bootstrap/Table';
// import { useState, useEffect } from 'react';

function Table({ data, time }) {
  let globalHourlyTotals = [];
  if (data.length > 0) {
    for (let i = 0; i < time.length; i++) {
      let hourlyTotal = 0;
      for (let store of data) {
        hourlyTotal += store.cookiesSoldPerHr[i];
      }
      globalHourlyTotals.push(hourlyTotal);
    }
  }

  return (
    <>
      <TableComp striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Hours</th>
            {time.map((hour) => (
              <th key={hour}>{hour}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((store, idx) => (
            <tr key={`${store.name}-${idx}`}>
              <td>{store.name}</td>
              {store.cookiesSoldPerHr.map((hourSales, idx) => (
                <td key={idx}>{hourSales}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td>Global Totals</td>
            {globalHourlyTotals.map((hourTotal, idx) => (
              <td key={`${hourTotal}-${idx}`}>{hourTotal}</td>
            ))}
          </tr>
        </tbody>
      </TableComp>
    </>
  );
}

export default Table;
