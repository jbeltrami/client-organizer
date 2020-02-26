export const signUp = form => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();

  try {
    const fbNewUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password);

    await firebase
      .firestore()
      .collection('users')
      .doc(fbNewUser.user.uid)
      .set({
        userType: 'client',
        firstName: form.firstName,
        lastName: form.lastName,
        initials: form.firstName[0] + form.lastName[0],
        email: form.email,
        password: form.password,
        clinic: form.clinic,
        createdAt: new Date(),
      });

    await dispatch({ type: 'CREATE_USER', payload: form });
  } catch (error) {
    await dispatch({ type: 'CREATE_USER_ERROR', payload: error.message });
  }
};

export const signIn = user => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    await dispatch({ type: 'LOGIN', payload: user });
  } catch (error) {
    await dispatch({ type: 'LOGIN_ERROR', payload: error });
  }
};

export const signOut = () => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    await dispatch({ type: 'SIGN_OUT' });
  } catch (error) {
    await dispatch({ type: 'SIGN_OUT_ERROR', payload: error });
  }
};
