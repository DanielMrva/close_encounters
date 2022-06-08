import "./Bottomnav.css";

export default function Bottomnav({ currentPage, handlePageChange }) {
  return (
    <div className="bottomnav-flex-container">
      <a
        href="#Createpost"
        onClick={() => handlePageChange("Createpost")}
        className={
          currentPage === "Createpost" ? "nav-link active" : "nav-link"
        }
      >
        <i className="fa-solid fa-folder-open fa-2xl"></i>
      </a>

      <a
        href="#Login"
        onClick={() => handlePageChange("Login")}
        className={currentPage === "Login" ? "nav-link active" : "nav-link"}
      >
        <i className="fa-solid fa-people-group fa-2xl"></i>
      </a>

      <a
        href="#Loginnew"
        onClick={() => handlePageChange("Loginnew")}
        className={currentPage === "Loginnew" ? "nav-link active" : "nav-link"}
      >
        <i className="fa-solid fa-box-archive fa-2xl"></i>
      </a>
    </div>
  );
}
