import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../actions/authActions';
import { Redirect } from 'react-router-dom';

const SignUp = ({ history }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const authId = useSelector(({ firebase: { auth } }) => auth && auth.uid);

  const onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp(form));
  };

  if (!authId)
    return (
      <div className="container mt-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  required
                  onChange={onInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  onChange={onInputChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );

  return <Redirect to="/" />;
};

export default SignUp;
