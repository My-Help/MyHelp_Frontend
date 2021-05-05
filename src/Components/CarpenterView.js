import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import Header from './Header';
export default function CarpenterView({ carpenters }) {

  const [datatable] = React.useState({

    columns: [
      {
        label: 'Name',
        field: 'Name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'AveragePrice',
        field: 'Price',

        width: 200,
      },
      {
        label: 'Gender',
        field: 'Gender',
        width: 100,
      },
      {
        label: 'City',
        field: 'City',
        width: 100,
      },
      {
        label: 'Description',
        field: 'Description',

        width: 200,
      },
    ],
    rows:carpenters
  });
    return (
        <>
        <Header/>
      <div className="container fluid">
        <div className="row">
          <div className="col-12 container-fluid">
            <h2 className="feature-heading ">Carpenters</h2>
            <hr className="feature-line" />
          </div>
        </div>
        <div>
          <MDBDataTableV5
            hover
            
            bordered
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            pagingTop
            searchTop
            searchBottom={false}
            scrollX
          />
        </div>
      </div>
      </>
    );
  }