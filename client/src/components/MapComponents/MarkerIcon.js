const MarkerIcon = (encounterType) => {
    let iconColor = "";
    let iconType = "";
  
    switch (encounterType) {
      case "Extraterrestrial":
        iconType = "rocket";
        iconColor = "#000080";
        break;
      case "Zoological":
        iconType = "dragon";
        iconColor = "#FF0000";
        break;
      case "Paranormal":
        iconType = "ghost";
        iconColor = "#000000";
        break;
      default:
        iconType = "location-dot";
        iconColor = "#000000";
    }
    return {iconType: iconType, iconColor: iconColor}
}

export default MarkerIcon;