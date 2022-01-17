import React, { useState } from "react";
import About from "./Component/pages/About";
import Contact from "./Component/pages/Contact";
import Portfolio from "./Component/pages/Portfolio";
import Navigation from "./Component/Navigation";

export default function PortfolioWrap() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
    }