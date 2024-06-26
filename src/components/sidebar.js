import logo from '../assets/images/uiblog-logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { clearAuthToken } from '../actions/authActions';


const Sidebar = () => {
  const tokenvalue = useSelector(state => state.authToken); // getting the store value
  console.log("authToken",tokenvalue)
  //const tokenid = localStorage.getItem("tokenid")
  const location = useLocation();
  const dispatch = useDispatch();
  let loginname;
  if (tokenvalue) {
    loginname =  <Link style={{color: 'inherit'}} to={location.pathname} onClick={() => dispatch(clearAuthToken())}>Logout</Link>
  } else {
    loginname = <Link style={{color: 'inherit'}} to="/">Login</Link>
  }
  console.log('ttt',location.pathname)
    return (
        <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
          <div className="main-navbar">
            <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
              <Link className="navbar-brand w-100 mr-0" href="#0"  style={{lineHeight: '25px'}}>
                <div className="d-table m-auto">
                  <img id="main-logo" className="d-inline-block align-top mr-1" style={{maxWidth: "130px"}} src={logo} alt="main-logo"/>
                </div>
              </Link>
              <Link to="/" className="toggle-sidebar d-sm-inline d-md-none d-lg-none" data-bs-toggle="collapse" data-bs-target=".main-sidebar">
                <i className="material-icons">&#xE5C4;</i>
              </Link>
            </nav>
          </div>
          <form action="#0" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
            <div className="input-group input-group-seamless ml-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"/>
            </div>
          </form>
          <div className="nav-wrapper">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" aria-current="page">
                  <i className="material-icons">edit</i>
                  <span>Blog Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/postlist">
                  <i className="material-icons">vertical_split</i>
                  <span>Blog Posts</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/addnewpost">
                  <i className="material-icons">note_add</i>
                  <span>Add New Post</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/userprofile">
                  <i className="material-icons">person</i>
                  <span>User Profile</span>
                </NavLink>
               </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/productlist">
                  <i className="material-icons">person</i>
                  <span>Productlist</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <div as="li" className="nav-link " to="/">
                  <i className="material-icons">person</i>
                  {loginname}
                </div>
              </li>
            </ul>
          </div>
        </aside>
    )
}
export default Sidebar;