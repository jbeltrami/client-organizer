import React from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import ClientCard from './ClientCard';

const AllClients = () => {
  useFirestoreConnect('clients');

  const clients = useSelector(state => state.firestore.data.clients);

  const renderClients = clientList => {
    const clientsArray = clientList && Object.values(clientList);
    const clientsIndex = clientList && Object.keys(clientList);

    if (clientsArray && clientsIndex)
      return clientsArray.map((e, i) => {
        return (
          <ClientCard {...e} key={clientsIndex[i]} userId={clientsIndex[i]} />
        );
      });
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-10">All Clients</div>
        {renderClients(clients)}
      </div>
    </div>
  );
};

export default AllClients;
