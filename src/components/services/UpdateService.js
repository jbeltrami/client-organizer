import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { updateService } from "../../actions/serviceActions";

const UpdateService = props => {
  const { id } = useParams();

  useFirestoreConnect([{ collection: "services", doc: id }]);
  const service = useSelector(
    ({ firestore: { data } }) => data.services && data.services[id]
  );

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    clientId: service.clientId,
    ownerId: service.ownerId
  });

  const { clientId } = service;

  useEffect(() => {
    setForm(service);
  }, [service]);

  const onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateService(id, form));
    props.history.push(`/client/${clientId}`);
  };

  const renderForm = someForm => {
    if (someForm)
      return (
        <div className='container mt-5'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-10'>
              <form onSubmit={handleSubmit}>
                <div className='form-row'>
                  <div className='form-group col-12'>
                    <label htmlFor='label'>Service Label</label>
                    <input
                      onChange={onInputChange}
                      type='text'
                      className='form-control'
                      name='label'
                      defaultValue={service.label}
                      required
                    />
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='price'>Price</label>
                    <input
                      onChange={onInputChange}
                      type='number'
                      className='form-control'
                      name='price'
                      defaultValue={service.price}
                      required
                    />
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='date'>Date</label>
                    <input
                      onChange={onInputChange}
                      type='text'
                      className='form-control'
                      name='date'
                      defaultValue={service.date}
                      required
                    />
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='description'>Service Description</label>
                  <textarea
                    className='form-control'
                    name='description'
                    rows='8'
                    onChange={onInputChange}
                    required
                    defaultValue={service.description}
                  ></textarea>
                </div>
                <button type='submit' className='btn btn-info'>
                  Update Service
                </button>
                <NavLink to={`/client/${clientId}`}>
                  <div className='btn btn-warning ml-5'>Go Back</div>
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

export default UpdateService;
