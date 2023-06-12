import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" w-full top-0 right-0">
      <div className="md:flex justify-between items-center bg-white px-10 py-5 ">
        <div>
          <h2 className="text-lg font-bold cursor-pointer">ICT Department</h2>
        </div>

        <div
          className="md:hidden absolute right-8 top-6 cursor-pointer text-2xl "
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes></FaTimes> : <FaBars />}
        </div>

        <ul
          className={`md:flex md:items-center  pt-5 md:pt-0 md:pb-0 pb-12 absolute md:static bg-white  z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  duration-1000  md:transition-none md:duration-0 ease-in ${
            open ? "left-0 " : "left-[-100rem]"
          }`}
        >
          <li className="md:pl-5 text-lg cursor-pointer font-semibold ">
            <Link to="/">Home</Link>
          </li>

          <div className="dropdown  dropdown-hover">
          <li  tabIndex={0} className="md:pl-5 text-lg cursor-pointer font-semibold">About ICT</li>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mr-10">
          <li><Link to="/faculty">Faculity</Link></li> 
          <li><a>Staff & Ofiicers</a></li>
          <li><Link to="/dept">Department</Link></li>
          
        </ul>
      </div>
      <li className="md:pl-5 text-lg cursor-pointer font-semibold">
        <Link to="/notice">Notice</Link>
      </li>
      {/* <div className="dropdown dropdown-hover">
          <li  tabIndex={1} className="md:pl-5 text-lg cursor-pointer font-semibold">Academic</li>
        <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mr-10">
          <li><a>Undergraduate Studies</a></li> 
          <li><a>Graduate Studies</a></li>
          <li><a>Evening Program</a></li>
        </ul>
      </div> */}
     
      <li className="md:pl-5 text-lg cursor-pointer font-semibold">
        <Link to="/contract">Contract</Link>
      </li>

        </ul>
      </div>
      
    </header>
  );
};

export default Navbar;
