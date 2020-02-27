import React, { useState, useEffect } from 'react';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ClientCard from './ClientCard';

const AllClients = ({ firebase, allClients }) => {
  useFirestoreConnect('clients');
  const authId = firebase.auth.uid;
  const clients =
    allClients &&
    Object.entries(allClients).filter(e => e[1].ownerId === authId);

  const handleSearch = () => {
    console.log('handle search');
  };

  const renderClientCards = clientList => {
    if (clientList && clientList.length)
      return clientList.map((e, i) => {
        return <ClientCard {...e[1]} key={e[0]} userId={e[0]} />;
      });

    return <p>Please add some clients.</p>;
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
          {renderClientCards(clients)}
        </div>
      </div>
    );
  };

  if (!authId) return <Redirect to="/sign-in" />;
  return renderAllClients();
};

const mapStateToProps = state => ({
  firebase: state.firebase,
  allClients: state.firestore.data.clients,
});

export default connect(mapStateToProps)(AllClients);
