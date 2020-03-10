import React, { useState, useEffect } from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ClientCard from './ClientCard';

const AllClients = props => {
  useFirestoreConnect('clients');
  const clients = props.clients;
  const authId = props.firebase.auth.uid;
  const [filteredClients, setFilteredClients] = useState({});

  useEffect(() => {
    setFilteredClients(clients);
  }, [clients]);

  const verifyId = e => e[1].ownerId === authId;

  const renderClients = clientList => {
    const clientCollection = clientList && Object.entries(clientList);
    const availableClients =
      clientCollection && clientCollection.filter(e => e[1].ownerId === authId);

    if (availableClients && availableClients.length)
      return availableClients
        .sort((a, b) => a[1].lastName.localeCompare(b[1].lastName))
        .map((e, i) => {
          return <ClientCard {...e[1]} key={e[0]} userId={e[0]} />;
        });

    return <p>Please add some clients.</p>;
  };

  const handleSearch = e => {
    const searchVal = e.target.value.toLowerCase();
    if (searchVal !== '') {
      const testArray = clients && Object.entries(clients);

      const filteredClientsArray = testArray
        .filter(verifyId)
        .reduce((acc, client, i) => {
          const name = `
          ${client[1].firstName.toLowerCase()} ${client[1].lastName.toLowerCase()}`;

          if (name.indexOf(searchVal) !== -1)
            return { ...acc, [client[0]]: client[1] };

          return acc;
        }, {});

      return setFilteredClients(filteredClientsArray);
    }

    return setFilteredClients(clients);
  };

  const handleSearchByTel = e => {
    const searchVal = e.target.value;

    if (searchVal !== '') {
      const clientsArray = clients && Object.values(clients);
      const clientsIndex = clients && Object.keys(clients);

      const filteredClientsArray = clientsArray
        .filter(verifyId)
        .reduce((acc, client, i) => {
          if (client.phoneNumber.indexOf(searchVal) !== -1)
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
              <label htmlFor="seach-box">Search by Name</label>
              <input type="text" name="search-box" onChange={handleSearch} />
            </form>
          </div>

          <div className="col-md-6">
            <form className="d-flex flex-column">
              <label htmlFor="seach-box">Search by Phone Number</label>
              <input
                type="text"
                name="search-box"
                onChange={handleSearchByTel}
              />
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
