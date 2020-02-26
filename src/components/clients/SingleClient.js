import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import normalizePhone from '../../helpers/normalizePhone';

const SingleClient = () => {
  const { id } = useParams();
  useFirestoreConnect([{ collection: 'clients', doc: id }]);

  const client = useSelector(
    ({ firestore: { data } }) => data.clients && data.clients[id],
  );

  const renderClient = () => {
    if (client) {
      return (
        <div className="container mt-5">
          <div className="row align-items-strech justify-content-center">
            <div className="col-md-4">
              <div className="card bg-light w-100" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h2 className="card-title mb-5">{`${client.firstName} ${client.lastName}`}</h2>
                  <h6 className="card-subtitle mb-2 font-weight-bold">
                    Phone:{' '}
                    <a href={`tel:+${normalizePhone(client.phoneNumber)}`}>
                      {normalizePhone(client.phoneNumber)}
                    </a>
                  </h6>
                  <h6 className="card-subtitle mb-2 font-weight-bold">
                    Email: <a href={`mailto:${client.email}`}>{client.email}</a>
                  </h6>
                  <p className="card-text">
                    <span className="font-weight-bold">Birthday: </span>
                    {client.birthday}
                  </p>

                  <div>
                    <p className="card-text mb-0 font-weight-bold">Address:</p>
                    <p className="card-text">{client.address}</p>
                    <p className="card-text mb-0 font-weight-bold">City:</p>
                    <p className="card-text">{client.city}</p>
                    <p className="card-text mb-0 font-weight-bold">State:</p>
                    <p className="card-text">{client.state}</p>
                    <p className="card-text mb-0 font-weight-bold">Zip Code:</p>
                    <p className="card-text">{client.zip}</p>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <NavLink to={`/update-client/${id}`}>
                    <button type="button" className="btn btn-warning">
                      Update
                    </button>
                  </NavLink>

                  <NavLink to={`/delete-client/${id}`}>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </NavLink>
                </div>
              </div>

              <div className="w-100 mt-3">
                <NavLink to={`/create-service/${id}`}>
                  <button className="btn btn-info w-100">Add Service</button>
                </NavLink>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row mb-3">
                <div className="col-md-12">Filters go here</div>
              </div>
              <div className="row align-items-start">
                <div className="col-md-12">Add accordions here</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <></>;
  };

  return renderClient();
};

export default SingleClient;
