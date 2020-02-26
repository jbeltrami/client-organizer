import React, { useState, useEffect } from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import ClientCard from './ClientCard';

const AllClients = () => {
  useFirestoreConnect('clients');
  const clients = useSelector(state => state.firestore.data.clients);
  const [filteredClients, setFilteredClients] = useState({});

  useEffect(() => {
    setFilteredClients(clients);
  }, [clients]);

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

  const handleSearch = e => {
    const searchVal = e.target.value.toLowerCase();
    if (searchVal !== '') {
      const clientsArray = filteredClients && Object.values(filteredClients);
      const clientsIndex = filteredClients && Object.keys(filteredClients);

      const filteredClientsArray = clientsArray.filter((client, i) => {
        const firstName = client.firstName.toLowerCase();
        const lastName = client.lastName.toLowerCase();
        if (
          firstName.indexOf(searchVal) !== -1 ||
          lastName.indexOf(searchVal) !== -1
        )
          return { [clientsIndex[i]]: client };
      });

      return setFilteredClients(filteredClientsArray);
    }

    return setFilteredClients(clients);
  };

  const renderAllClients = () => {
    return (
      <div className="container mt-5">
        <div className="row align-items-center justify-content-center mb-5">
          <div className="col-md-6">
            <form className="d-flex flex-column">
              <label htmlFor="seach-box">Search for a client</label>
              <input type="text" name="search-box" onChange={handleSearch} />
            </form>
          </div>
        </div>

        <div className="row align-items-center justify-content-start">
          {renderClients(filteredClients)}
        </div>
      </div>
    );
  };

  return renderAllClients();
};

export default AllClients;
