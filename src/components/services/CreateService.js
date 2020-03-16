import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createService } from '../../actions/serviceActions';

const CreateService = ({ history }) => {
  const { id } = useParams();
  const [form, setForm] = useState({ clientId: id });
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createService(form));
    history.push(`/client/${id}`);
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-10">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-12">
                <label htmlFor="label">Service Label</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  name="label"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="price">Price</label>
                <input
                  onChange={handleInputChange}
                  type="number"
                  className="form-control"
                  name="price"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="date">Date</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  name="date"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Service Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="8"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-info">
              Add Service
            </button>
            <NavLink to={`/client/${id}`}>
              <div className="btn btn-warning ml-5">Go Back</div>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateService;
