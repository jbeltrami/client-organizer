import React from 'react';
import { NavLink } from 'react-router-dom';
import normalizePhone from '../../helpers/normalizePhone';

const ClientCard = props => {
  const { firstName, lastName, email, phoneNumber, userId } = props;

  const renderCard = () => {
    return (
      <div className="col-md-4 mb-4">
        <NavLink to={`/client/${userId}`}>
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {normalizePhone(phoneNumber)}
              </h6>
              <p className="card-text">{`${email}`}</p>
            </div>
          </div>
        </NavLink>
      </div>
    );
  };

  return renderCard();
};

export default ClientCard;
