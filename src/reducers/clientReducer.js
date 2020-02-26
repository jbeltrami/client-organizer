const clientReducer = (state = { authError: '' }, action) => {
  switch (action.type) {
    case 'CREATE_CLIENT':
      console.log('CREATE CLIENT SUCCESS');
      return state;

    case 'CREATE_CLIENT_ERROR':
      console.error('CREATE CLIENT ERROR: ', action.payload);
      return { ...state, authError: action.payload };

    case 'GET_CLIENT':
      console.log(
        `GET CLIENT: ${action.payload.firstName} ${action.payload.lastName}`,
      );
      return { ...state, currentClient: action.payload };

    case 'GET_CLIENT_ERROR':
      console.error('GET CLIENT ERROR: ', action.payload);
      return { ...state, authError: action.payload };

    case 'GET_CLIENTS':
      console.log('GET CLIENTS SUCCESS');
      return { ...state, clients: action.payload };

    case 'GET_CLIENTS_ERROR':
      console.error('GET CLIENTS ERROR: ', action.payload);
      return state;

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
