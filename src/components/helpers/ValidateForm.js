// Expresiones regulares
const regExpNombreClase = /^[A-Za-z0-9\s?]+$/;
const regExpNombreTeacher = /^[A-Za-z0-9\s?]+$/;
const regExpDetalleClase = /^[A-Za-z0-9\s!@#$%^&*()_+{}:;<>,.?/~\\-]+$/;
const regExpDia = /^[A-Za-z]+$/;
const regExpHorario = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

// Funciones de validación
export const validarNombreClase = (field) => {
  if (field && regExpNombreClase.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validarNombreTeacher = (field) => {
  if (field && regExpNombreTeacher.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validarDetalleClase = (field) => {
  if (field && regExpDetalleClase.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validarDia = (field) => {
  if (field && regExpDia.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validarHorario = (field) => {
  if (field && regExpHorario.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};
