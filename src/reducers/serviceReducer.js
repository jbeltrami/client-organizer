const serviceReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_SERVICE':
      console.log('CREATE SERVICE SUCCESS');
      return state;

    case 'CREATE_SERVICE_ERROR':
      console.error('CREATE SERVICE ERROR: ', action.payload);
      return { ...state, authError: action.payload };

    case 'UPDATE_SERVICE':
      console.log('UPDATE SERVICE SUCCES');
      return state;

    case 'UPDATE_SERVICE_ERROR':
      console.error('UPDATE SERVICE ERROR: ', action.payload);
      return state;

    case 'DELETE_SERVICE':
      console.log('DELETE SERVICE SUCCESS');
      return state;

    case 'DELETE_SERVICE_ERROR':
      console.error('DELETE SERVICE ERROR: ', action.payload);
      return state;
    default:
      return state;
  }
};

export default serviceReducer;
