const clientReducer = (state = { authError: '' }, action) => {
  switch (action.type) {
    case 'CREATE_CLIENT':
      console.log('CREATE CLIENT SUCCESS');
      return state;

    case 'CREATE_CLIENT_ERROR':
      console.error('CREATE CLIENT ERROR: ', action.payload);
      return { ...state, authError: action.payload };

    case 'UPDATE_CLIENT':
      console.log('UPDATE CLIENT SUCCES');
      return { ...state, currentClient: action.payload };

    case 'UPDATE_CLIENT_ERROR':
      console.error('UPDATE CLIENT ERROR: ', action.payload);
      return state;

    case 'DELETE_CLIENT':
      console.log('DELETE CLIENT SUCCESS');
      return { ...state, currentClient: undefined };

    case 'DELETE_CLIENT_ERROR':
      console.error('DELETE CLIENT ERROR: ', action.payload);
      return state;
    default:
      return state;
  }
};

export default clientReducer;
