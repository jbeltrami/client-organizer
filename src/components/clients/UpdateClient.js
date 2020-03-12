import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { updateClient } from '../../actions/clientActions';

const UpdateClient = props => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState();

  useFirestoreConnect([{ collection: 'clients', doc: id }]);
  const client = useSelector(
    ({ firestore: { data } }) => data.clients && data.clients[id],
  );

  useEffect(() => {
    setForm(client);
  }, [client]);

  const onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateClient(id, form));
    props.history.push(`/client/${id}`);
  };

  const renderForm = someForm => {
    if (someForm)
      return (
        <div className="container mt-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-10">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      onChange={onInputChange}
                      defaultValue={someForm.firstName}
                    />
                  </div>
                  <div className="form-group col">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      onChange={onInputChange}
                      defaultValue={someForm.lastName}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="address">Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      onChange={onInputChange}
                      defaultValue={someForm.address}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <input
                      className="form-control"
                      type="text"
                      name="city"
                      onChange={onInputChange}
                      defaultValue={someForm.city}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="state">State</label>
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      onChange={onInputChange}
                      defaultValue={someForm.state}
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="zip">Zip Code</label>
                    <input
                      className="form-control"
                      type="text"
                      name="zip"
                      onChange={onInputChange}
                      defaultValue={someForm.zip}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      className="form-control"
                      type="tel"
                      name="phoneNumber"
                      onChange={onInputChange}
                      defaultValue={someForm.phoneNumber}
                    />
                  </div>
                  <div className="form-group col">
                    <label htmlFor="birthday">DOB</label>
                    <input
                      className="form-control"
                      type="text"
                      name="birthday"
                      onChange={onInputChange}
                      defaultValue={someForm.birthday}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      onChange={onInputChange}
                      defaultValue={someForm.email}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-info">
                  Update Client
                </button>

                <NavLink to={`/client/${id}`}>
                  <button className="btn btn-warning ml-5">Go Back</button>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      );

    return <></>;
  };

  return renderForm(form);
};

export default UpdateClient;
