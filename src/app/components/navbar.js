import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  // Define inline styles for the navbar
  const navbarStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    backdropFilter: 'blur(10px)', // Blur effect
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)', // Optional: light border for better visibility
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Optional: subtle shadow for depth
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={navbarStyle}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/assets/img/800.png"
              alt="Logo"
              width={197}
              height={40}
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-outline-danger mx-2 fs-5 mt-2"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-outline-danger mx-2 fs-5 mt-2"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item dropdown mx-2 fs-5 mt-2">
                <a
                  className="nav-link btn btn-outline-danger dropdown-toggle"
                  href="/service"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/service">Service</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="https://genshin.hoyoverse.com/th/home" target="_blank">Additional information</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-outline-danger mx-2 fs-5 mt-2"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link href="/signup" className="btn btn-outline-primary mx-2 fs-5" type="submit">
                SignUp
              </Link>
              <Link href="/signin" className="btn btn-outline-success mx-2 fs-5" type="submit">
                SignIn
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
