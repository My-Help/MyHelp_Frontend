import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
export default function BookingView({ bookings }) {

  const [datatable] = React.useState({

    columns: [
      {
        label: 'CustomerName',
        field: 'Customers_Username',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      
      {
        label: 'Mobile',
        field: 'mobileNo',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'Address',
        field: 'Address',

        width: 200,
      },
      {
        label: 'Date',
        field: 'DateTime',
        sort:'asc',
        width: 100,
      },
      {
        label: 'Time Slot',
        field: 'TimeSlot',
        width: 100,
      },
      {
        label: 'Description',
        field: 'ProblemDescription',

        width: 200,
      },
    ],
    rows: bookings,

  });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 container-fluid">
            <h2 className="feature-heading ">Bookings Completed</h2>
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
    );
  }