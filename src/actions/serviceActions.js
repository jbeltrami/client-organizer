export const createService = form => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase();
  const auth = getState().firebase.auth;

  try {
    await firebase
      .firestore()
      .collection("services")
      .doc()
      .set({
        ownerId: auth.uid,
        clientId: form.clientId,
        label: form.label,
        price: form.price,
        date: form.date,
        description: form.description
      });

    await dispatch({ type: "CREATE_SERVICE", payload: form });
  } catch (error) {
    await dispatch({ type: "CREATE_SERVICE_ERROR", payload: error.message });
  }
};

export const updateService = (id, form) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase();

  try {
    await firebase
      .firestore()
      .collection("services")
      .doc(id.toString())
      .set({
        ownerId: form.ownerId,
        clientId: form.clientId,
        label: form.label,
        price: form.price,
        date: form.date,
        description: form.description,
        updatedAt: new Date()
      });
    await dispatch({ type: "UPDATE_SERVICE", payload: form });
  } catch (error) {
    await dispatch({ type: "UPDATE_SERVICE_ERROR", payload: error.message });
  }
};

export const deleteService = id => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();

  try {
    await firebase
      .firestore()
      .collection("services")
      .doc(id.toString())
      .delete();

    await dispatch({ type: "DELETE_SERVICE", payload: id });
  } catch (error) {
    await dispatch({ type: "DELETE_SERVICE_FAIL", payload: error.message });
  }
};
