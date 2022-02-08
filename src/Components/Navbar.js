const Navbar = () => {
     return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-success position-sticky top-0">
               <div className="container">
                    <a className="navbar-brand fw-bolder" href="#">
                         علی ثروت
                    </a>
                    <button
                         className="navbar-toggler"
                         type="button"
                         data-bs-toggle="collapse"
                         data-bs-target="#navbarNav"
                    >
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                         className="collapse navbar-collapse justify-content-end"
                         id="navbarNav"
                    >
                         <ul className="navbar-nav">
                              <li className="nav-item"></li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#about">
                                        درباره من{' '}
                                   </a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#projects">
                                        نمونه کار
                                   </a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#contact">
                                        تماس با من{' '}
                                   </a>
                              </li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
