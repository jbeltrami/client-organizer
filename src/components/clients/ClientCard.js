import React from 'react';
import { NavLink } from 'react-router-dom';
import normalizePhone from '../../helpers/normalizePhone';

const ClientCard = props => {
  const { firstName, lastName, email, phoneNumber, userId } = props;

  return (
    <NavLink to={`/client/${userId}`}>
      <div className="col-md-4">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Phone: {normalizePhone(phoneNumber)}
            </h6>
            <p className="card-text">Email: {`${email}`}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ClientCard;
