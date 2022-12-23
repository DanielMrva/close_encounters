import {DivIcon} from 'leaflet'

const CustDivIcon = ({iconType, iconColor, iconStyle}) => {
    return new DivIcon({
      className: "div-icon",
      html: `<i class="fa-solid fa-${iconType} fa-xl" style="color:${iconColor}; opacity:${iconStyle}"></i>`,
      iconSize: [30, 30],
      iconAnchor: [15, 31],
      popupAnchor: [0, -32],
    });
  };

  export default CustDivIcon