const MarkerIcon = (encounterType) => {
    let iconColor = "";
    let iconType = "";
  
    switch (encounterType) {
      case "Extraterrestrial":
        iconType = "rocket";
        iconColor = "#03fcec";
        break;
      case "Zoological":
        iconType = "dragon";
        iconColor = "#e77ef2";
        break;
      case "Paranormal":
        iconType = "ghost";
        iconColor = "#55edb5";
        break;
      default:
        iconType = "location-dot";
        iconColor = "#000000";
    }
    return {iconType: iconType, iconColor: iconColor}
}

export default MarkerIcon;