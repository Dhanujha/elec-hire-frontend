import React from "react";
function Header({ title = "Electrician Hire" }) {
  return (
    <nav class="bg-dark navbar-dark navbar">
      <div className="row col-12 d-flex justify-content-center text-white">
        <h3>{title}</h3>
      </div>
    </nav>
  );
}
export default Header;
