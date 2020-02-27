import React, { useState, useEffect } from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import ClientCard from './ClientCard';

const AllClients = props => {
  useFirestoreConnect('clients');
  const clients = props.clients;
  const authId = props.firebase.auth.uid;
  const [filteredClients, setFilteredClients] = useState({});

  useEffect(() => {
    setFilteredClients(clients);
  }, [clients]);

  const verifyId = e => e.ownerId === authId;

  const renderClients = clientList => {
    const clientsArray = clientList && Object.values(clientList);
    const clientsIndex = clientList && Object.keys(clientList);
    const availableClients = clientsArray && clientsArray.filter(verifyId);

    if (availableClients && availableClients.length)
      return availableClients.map((e, i) => {
        return (
          <ClientCard {...e} key={clientsIndex[i]} userId={clientsIndex[i]} />
        );
      });

    return <p>Please add some clients.</p>;
  };

  const handleSearch = e => {
    const searchVal = e.target.value.toLowerCase();
    if (searchVal !== '') {
      const clientsArray = clients && Object.values(clients);
      const clientsIndex = clients && Object.keys(clients);

      const filteredClientsArray = clientsArray
        .filter(verifyId)
        .reduce((acc, client, i) => {
          const name = `
          ${client.firstName.toLowerCase()} ${client.lastName.toLowerCase()}`;

          if (name.indexOf(searchVal) !== -1)
            return { ...acc, [clientsIndex[i]]: client };

          return acc;
        }, {});

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

        <div className="row align-items-stretch justify-content-center">
          {renderClients(filteredClients)}
        </div>
      </div>
    );
  };

  if (!authId) return <Redirect to="/sign-in" />;
  return renderAllClients();
};

const mapStateToProps = state => ({
  firebase: state.firebase,
  clients: state.firestore.data.clients,
});

export default connect(mapStateToProps)(AllClients);
