import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newArray = links.map((newlink) => {
    return (
      <a key={newlink} href={`#${newlink}`}>
        {newlink}
      </a>
    );
  });

  return <nav>{newArray}</nav>;
}

export default NavBar;
