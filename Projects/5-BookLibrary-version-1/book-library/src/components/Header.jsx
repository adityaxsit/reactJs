import styles from "./Header.module.css";

const navItems = [
  "Home",
  "Books",
  "Categories",
  "About",
  "Contact",
];

function Header() {
  return (
    <nav className={`navbar navbar-expand-lg px-5 ${styles.header}`}>
      <div className="container-fluid">

        <a className={`navbar-brand ${styles.logo}`} href="#">
          📖BookLibrary
        </a>

        <ul className="navbar-nav mx-auto">
          {navItems.map((item) => (
            <li className="nav-item" key={item}>
              <a className={`nav-link ${styles.link}`} href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <span className={styles.shelf}>
          My Shelf⭐ 
        </span>

      </div>
    </nav>
  );
}

export default Header;