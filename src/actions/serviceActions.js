export const createService = form => async (
  dispatch,
  getState,
  getFirebase,
) => {
  const firebase = getFirebase();
  const auth = getState().firebase.auth;

  try {
    await firebase
      .firestore()
      .collection('services')
      .doc()
      .set({
        ownerId: auth.uid,
        clientId: form.clientId,
        label: form.label,
        price: form.price,
        date: form.date,
        description: form.description,
      });

    await dispatch({ type: 'CREATE_SERVICE', payload: form });
  } catch (error) {
    await dispatch({ type: 'CREATE_SERVICE_ERROR', payload: error.message });
  }
};
