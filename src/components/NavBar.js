import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newhref = ["#home", "#about", "#projects"];
  const newArray = links.map((newlink, index) => {
    return (
      <a key={newlink} href={newhref[index]}>
        {newlink}
      </a>
    );
  });

  return <nav>{newArray}</nav>;
}

export default NavBar;
