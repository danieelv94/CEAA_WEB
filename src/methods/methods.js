import { estadoActividades, estadoActividades2, disciplinaFinanciera, informacionPresupuestaria, ejemplo11 } from "../json/anioArmonizacion";
import { disFinanciera } from "../json/anioDisciplina";


export const obtenerDatosSeleccionados = (selectedItemIndex) => {
  let datosSeleccionados = [];

  switch (selectedItemIndex) {
    case 'Estado de Situación Financiera':
      datosSeleccionados = estadoActividades;
      break;
      case 'Estado de Actividades2':
      datosSeleccionados = estadoActividades2;
      break;
    case 'Disciplina Financiera':
      datosSeleccionados = disciplinaFinanciera;
      break;
    case 'Información Presupuestaria':
      datosSeleccionados = informacionPresupuestaria;
      break;
    case 'Ejemplo1.1':
      datosSeleccionados = ejemplo11;
      break;
    default:
      datosSeleccionados = [];
  }

  return datosSeleccionados;
};



export const obtenerDatosSeleccionadosDisciplina = (selectedItemIndex) => {
  let datosSeleccionadosDisciplina = [];
  switch (selectedItemIndex) {
    case 'este es el titulo disciplina financiera':
      datosSeleccionadosDisciplina = disFinanciera;
      break;
    default:
      datosSeleccionadosDisciplina = [];
  }

  return datosSeleccionadosDisciplina;
};