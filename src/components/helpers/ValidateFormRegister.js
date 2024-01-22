const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoRegex = /^\d{10,13}$/;
const nameUserRegex = /^[a-zA-Z0-9]{4,25}$/;
const passwordRegex = /^.{6,}$/;

export const validateNameuser = (user) => {
  if (nameUserRegex.test(user) && user.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateEmailuser = (user) => {
  if (emailRegex.test(user) && user.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateTelefono = (user) => {
  if (telefonoRegex.test(user) && user.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validatePassworduser = (user) => {
  if (passwordRegex.test(user) && user.trim() !== "") {
    return true;
  } else {
    return false;
  }
};
