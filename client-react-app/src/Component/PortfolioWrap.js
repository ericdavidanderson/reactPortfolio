import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navigation from "./Navigation";

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
        <h1 id="Header"> Welcome to Eric Anderson's Portfolio Page.

        </h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
    }