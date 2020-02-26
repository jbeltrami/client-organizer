import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const UpdateClient = props => {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-10">
          Are you sure you want to update this client?
          {id}
        </div>
      </div>
    </div>
  );
};

export default UpdateClient;
