const normalizePhone = phone => {
  //normalize string and remove all unnecessary characters
  phone = phone ? phone.replace(/[^\d]/g, "") : phone;

  //check if number length equals to 10
  if (phone && phone.length === 10) {
    //reformat and return phone number
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }

  return null;
};

export default normalizePhone;
