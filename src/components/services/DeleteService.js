import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteService } from "../../actions/serviceActions";
import { useFirestoreConnect } from "react-redux-firebase";

const DeleteService = props => {
  const { id } = useParams();
  useFirestoreConnect([{ collection: "services", doc: id }]);
  const { history } = props;
  const dispatch = useDispatch();

  const service = useSelector(
    ({ firestore: { data } }) => data.services && data.services[id]
  );

  const onDelete = e => {
    dispatch(deleteService(id));
    history.push(`/client/${service.clientId}`);
  };

  const renderDeleteScreen = someService => {
    if (someService)
      return (
        <div className='container mt-5'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-10'>
              <p className='text-center'>
                Are you sure you want to delete
                <span className='font-weight-bold'>{` ${service.label}`}</span>
              </p>

              <div className='d-flex w-50 justify-content-around ml-auto mr-auto'>
                <button className='btn btn-danger' onClick={onDelete}>
                  Delete
                </button>
                <NavLink to={`/client/${service.clientId}`}>
                  <button className='btn btn-info'>Go Back</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      );

    return <></>;
  };

  return renderDeleteScreen(service);
};

export default DeleteService;
