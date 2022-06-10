import "./Topnav.css";

export default function Topnav({ currentPage, handlePageChange }) {
  return (
    <div className="topnav-flex-container">
      <a
        href="#Home"
        onClick={() => handlePageChange("Home")}
        className={currentPage === "Home" ? "close active" : "close"}
      >
        close encounters
      </a>
      <a
        href="#Encountercard"
        onClick={() => handlePageChange("Encountercard")}
        className={currentPage === "Encountercard" ? "close active" : "close"}
      >
        encountercardtest
      </a>
      <div className="icon-container">
        <a
          href="#MapWrapper"
          onClick={() => handlePageChange("MapWrapper")}
          className={
            currentPage === "MapWrapper" ? "nav-link active" : "nav-link"
          }
        >
          <i className="fa-solid fa-earth-americas fa-2xl"></i>
        </a>
        <a
          href="#User"
          onClick={() => handlePageChange("User")}
          className={currentPage === "User" ? "nav-link active" : "nav-link"}
        >
          <i className="fa-solid fa-person-falling fa-2xl"></i>
        </a>
      </div>
    </div>
  );
}
