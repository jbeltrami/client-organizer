import React from 'react';
import { useParams } from 'react-router-dom';

const SingleClient = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-10">
          <p>Client: {id}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleClient;
