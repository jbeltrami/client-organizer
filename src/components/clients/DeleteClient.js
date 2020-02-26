import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const DeleteClient = props => {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-10">
          Are you sure you want to delete this client?
          {id}
        </div>
      </div>
    </div>
  );
};

export default DeleteClient;
