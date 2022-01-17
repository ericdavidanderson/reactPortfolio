import React from "react";

function Navigation({ currentPage, handlePageChange}) {
  return (
    <ul className="nav tab">
      <li className="nav-item">
        <a 
        href="#About" 
        onClick={() => handlePageChange("About")}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a 
        href="#Portfolio" 
        onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a 
        href="#Contact"
         onClick={() => handlePageChange("Contact")}>
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;


//     )
//   }
//   return (
//     <div>
//        <div class="Links">
//       <ul class="ul">
//         <li>
//           <a href='#Portfolio'>Portfolio</a>
//         </li>

//         <li>
//           <a href="#Contact"> Contact</a>
//         </li>
//         <li>
//           <a href="#About"> About me </a>
//         </li>
//       </ul>
//     </div> 
//     </div>
//   );
// }
