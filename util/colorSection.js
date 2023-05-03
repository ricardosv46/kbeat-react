export const colorSection = (sectionName = "") => {
  let color = "";
  switch (sectionName.toUpperCase()) {
    case "K-DRAMAS":
      color = "#E8495F";
      break;
    case "TRENDING":
      color = "#3CB1B9";
      break;
    case "CINE Y TV":
      color = "#3257A5";
      break;
    case "ESPECIALES BIBIMBAP":
      color = "#563B80";
      break;
    case "K-BEAUTY":
      color = "#69DBF2";
      break;
    case "K-POP":
      color = "#E46EC2";
      break;
    case "ASIA FAMA":
      color = "#F11167";
      break;
    case "SERIES BL":
      color = "#8B65EC";
      break;
    default:
      color = "#e60000";
  }
  return color;
};

