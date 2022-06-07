import "./Topnav.css";

export default function Topnav() {
  return (
    <div className="topnav-flex-container">
      <div className="close">close encounters</div>
      <div className="icon-container">
        <i className="fa-solid fa-earth-americas fa-2xl"></i>
        <i className="fa-solid fa-person-falling fa-2xl"></i>
      </div>
    </div>
  );
}
