import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createClient } from '../../actions/clientActions';

const CreateClient = props => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createClient(form));
    props.history.push('/clients');
  };

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
                />
              </div>
              <div className="form-group col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  onChange={onInputChange}
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
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="state">State</label>
                <input
                  className="form-control"
                  type="text"
                  name="state"
                  onChange={onInputChange}
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="zip">Zip Code</label>
                <input
                  className="form-control"
                  type="text"
                  name="zip"
                  onChange={onInputChange}
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
                />
              </div>
              <div className="form-group col">
                <label htmlFor="birthday">DOB</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="mm/dd/yyyy"
                  name="birthday"
                  onChange={onInputChange}
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
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Add Client
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
