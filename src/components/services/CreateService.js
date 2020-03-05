import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createService } from '../../actions/serviceActions';

const CreateService = ({ history }) => {
  const { id } = useParams();
  const [form, setForm] = useState({ clientId: id, services: [] });
  const [servicesCount, setServicesCount] = useState([{ name: '', price: '' }]);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name.includes('service')) {
      const serviceIndex = parseInt(name.split('-').pop());
      const allServices = servicesCount;

      allServices[serviceIndex].name = value;

      setServicesCount(allServices);
    }

    if (name.includes('price')) {
      const serviceIndex = parseInt(name.split('-').pop());
      const allServices = servicesCount;

      allServices[serviceIndex].price = value;

      setServicesCount(allServices);
    }
    setForm({ ...form, services: servicesCount, [name]: value });
  };

  const handleAddService = e => {
    setServicesCount([...servicesCount, { name: '', price: '' }]);
  };

  const handleRemoveService = e => {
    setServicesCount(
      servicesCount.filter(
        el => el !== servicesCount[servicesCount.length - 1],
      ),
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createService(form));
    history.push(`/client/${id}`);
  };

  const renderServices = numberOfServices => {
    return numberOfServices.map((e, i) => {
      return (
        <div key={`service-${i}`} className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor={`service-${i}`}>Service</label>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control name"
              name={`service-${i}`}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor={`price-${i}`}>Price</label>
            <input
              onChange={handleInputChange}
              type="number"
              className="form-control price"
              name={`price-${i}`}
              required
            />
          </div>
        </div>
      );
    });
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
                  required
                />
              </div>
            </div>

            {renderServices(servicesCount)}

            <div className="form-row">
              <div className="form-group d-flex flex-row w-100">
                <input
                  className="btn btn-danger ml-auto"
                  style={{ marginRight: '5px' }}
                  type="button"
                  value="-"
                  onClick={handleRemoveService}
                />

                <input
                  className="btn btn-success"
                  style={{ marginRight: '5px' }}
                  type="button"
                  value="+"
                  onClick={handleAddService}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="date">Date</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  name="date"
                  required
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
                required
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
