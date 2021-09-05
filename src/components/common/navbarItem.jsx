import { Link } from "react-router-dom";

const NavbarItem = ({ currentPath, name, route }) => {
  let classes = "nav-link";

  if (currentPath === route) {
    classes += " active";
  }

  return (
    <li className="nav-item">
      <Link className={classes} to={route}>
        {name}
      </Link>
    </li>
  );
};

export default NavbarItem;
