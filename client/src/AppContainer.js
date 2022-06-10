import React, { useState } from "react";

import Topnav from "./components/Topnav/Topnav";
import MapWrapper from "./pages/basic-map";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Createpost from "./components/Createpost/Createpost";
import Login from "./pages/Login/Login";
import Loginnew from "./pages/Login/Loginnew";
import Bottomnav from "./components/Bottomnav/Bottomnav";
import Encountercard from "./components/Encountercard/Encountercard";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "MapWrapper") {
      return <MapWrapper />;
    }
    if (currentPage === "User") {
      return <User />;
    }
    if (currentPage === "Createpost") {
      return <Createpost />;
    }
    if (currentPage === "Encountercard") {
      return <Encountercard />;
    }
    if (currentPage === "Login") {
      return (
        <Login currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    if (currentPage === "Loginnew") {
      return (
        <Loginnew
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      );
    }
    return;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <Topnav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Bottomnav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </section>
  );
}
