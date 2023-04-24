export const colorSection = (sectionName = "") => {
  let color = "";
  switch (sectionName.toUpperCase()) {
    case "K-DRAMAS":
      color = "#E8495F";
      break;
    case "SEXO SENTIDO":
    case "LO ÚLTIMO DE SEXO SENTIDO":
      color = "#bf5271";
      break;
    case "VIRALES":
    case "LO ÚLTIMO DE VIRALES":
      color = "#c20e78";
      break;
    case "ESPECTÁCULOS":
    case "ESPECTACULOS":
    case "LO ÚLTIMO DE ESPECTÁCULOS":
      color = "#e50e73";
      break;
    case "DEPORTES":
    case "LO ÚLTIMO DE DEPORTES":
      color = "#008048";
      break;
    case "EDUCACIÓN":
    case "LO ÚLTIMO DE EDUCACIÓN":
      color = "#0077d7";
      break;
    case "MUNDO":
    case "LO ÚLTIMO DE MUNDO":
      color = "#0b3ac4";
      break;
    case "VIDA":
    case "LO ÚLTIMO DE VIDA":
      color = "#1877f2";
      break;
    case "ARCHIVO":
    case "LO ÚLTIMO DE ARCHIVO":
      color = "#18c472";
      break;
    case "HORÓSCOPO":
    case "LO ÚLTIMO DE HORÓSCOPO":
      color = "#15860D";
      break;
    case "CINE Y SERIES TV":
    case "LO ÚLTIMO DE CINE Y SERIES TV":
      color = "#284B86";
      break;
    case "ÚLTIMAS NOTICIAS":
    case "LO ÚLTIMO DE NOTICIAS":
      color = "#e60000";
      break;
    case "PROMOCIONES":
    case "LO ÚLTIMO DE PROMOCIONES":
      color = "#E9BC0A";
      break;
    case "LAS GATITAS":
    case "LO ÚLTIMO DE LAS GATITAS":
      color = "#ED1260";
      break;
    case "ENLACES DE INTERÉS":
    case "LO ÚLTIMO DE ENLACES DE INTERÉS":
      color = "#707070";
      break;
    default:
      color = "#e60000";
  }
  return color;
};
export const cutString = (numberMaxCharacters, text = "") => {
  if (text && numberMaxCharacters) {
    return `${text.substring(0, numberMaxCharacters)}...`;
  }
  return text;
};
