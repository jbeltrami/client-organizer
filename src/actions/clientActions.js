export const createClient = form => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();
  const ownerId = getState().firebase.auth.uid;

  try {
    await firebase
      .firestore()
      .collection("clients")
      .doc()
      .set({
        ownerId,
        firstName: form.firstName || "",
        lastName: form.lastName || "",
        address: form.address || "",
        city: form.city || "",
        state: form.state || "",
        zip: form.zip || "",
        phoneNumber: form.phoneNumber || "",
        email: form.email || "",
        birthday: form.birthday || "",
        createdAt: new Date()
      });

    await dispatch({ type: "CREATE_CLIENT", payload: form });
  } catch (error) {
    await dispatch({ type: "CREATE_CLIENT_ERROR", payload: error.message });
  }
};

export const deleteClient = id => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase();

  try {
    await firebase
      .firestore()
      .collection("clients")
      .doc(id.toString())
      .delete();

    await dispatch({ type: "DELETE_CLIENT", payload: id });
  } catch (error) {
    await dispatch({ type: "DELETE_CLIENT_ERROR", payload: error.message });
  }
};

export const updateClient = (id, form) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase();
  const ownerId = getState().firebase.auth.uid;

  try {
    await firebase
      .firestore()
      .collection("clients")
      .doc(id.toString())
      .set({
        ownerId,
        firstName: form.firstName || "",
        lastName: form.lastName || "",
        address: form.address || "",
        city: form.city || "",
        state: form.state || "",
        zip: form.zip || "",
        phoneNumber: form.phoneNumber || "",
        email: form.email || "",
        birthday: form.birthday || "",
        createdAt: form.createdAt || "",
        updatedAt: new Date()
      });
    await dispatch({ type: "UPDATE_CLIENT", payload: form });
  } catch (error) {
    await dispatch({ type: "UPDATE_CLIENT_ERROR", payload: error.message });
  }
};
