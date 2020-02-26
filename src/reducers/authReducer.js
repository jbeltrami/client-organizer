const authReducer = (state = { authError: '' }, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      console.log('CREATE USER SUCCESS');
      return state;
    case 'CREATE_USER_ERROR':
      console.error('CREATE USER ERROR: ', action.payload);
      return { ...state, authError: action.payload };
    case 'SIGN_OUT':
      console.log('USER SIGNED OUT');
      return state;
    case 'SIGN_OUT_ERROR':
      console.error('USER SIGN OUT ERROR: ', action.payload);
      return state;
    case 'LOGIN':
      console.log('USER LOGIN: ', action.payload.email);
      return state;
    case 'LOGIN_ERROR':
      console.log('LOGIN FAILED', action.payload);
      return state;
    default:
      return state;
  }
};

export default authReducer;
