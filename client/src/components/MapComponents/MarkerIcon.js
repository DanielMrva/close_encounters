import getISODate from "../../utils/dateUnformat";

const MarkerIcon = ({ encounterType, date }) => {
  let iconColor = "";
  let iconType = "";
  let iconStyle = "";

  switch (encounterType) {
    case "Extraterrestrial":
      iconType = "rocket";
      iconColor = "#7E7E8A";
      break;
    case "Zoological":
      iconType = "dragon";
      iconColor = "#D57247";
      break;
    case "Paranormal":
      iconType = "ghost";
      iconColor = "#23277E ";
      break;
    default:
      iconType = "location-dot";
      iconColor = "#000000";
  }

  if (Date.now() / 86400000 - 1.5 >= getISODate(date)) {
    iconStyle = "solid";
  } else {
    iconStyle = "regular";
  }
  return { iconType: iconType, iconColor: iconColor, iconStyle: iconStyle };
};

export default MarkerIcon;
