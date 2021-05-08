import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
export default function CustomerBookings({ bookings }) {

  const [datatable] = React.useState({

    columns: [
      {
        label: 'Service Provider',
        field: 'ServiceProviders_Username',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
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
      {label: 'Actions',
      field: 'Action',
      default: <div>
        <i className="fa fa-check-circle resolve mr-2"></i>
        <i class="fas mr-2 feed fa-clipboard-list"></i>
        <i className="fa fa-trash-alt delete"></i>
      </div>,
      width: 100,}
    ],
    rows: bookings,

  });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 container-fluid">
            <h2 className="feature-heading "> Your Bookings</h2>
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