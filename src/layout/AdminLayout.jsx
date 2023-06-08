import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
// import Navbar from "../Shared/Navbar";

const AdminLayout = () => {
  return (
    <div>
      <div className="flex justify-end">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button  lg:hidden"
        >
          <FaBars></FaBars>
        </label>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content m-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Link
              to="/admin/teachers"
              className="flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-lg hover:bg-gray-300 hover:text-gray-700"
            >
              Add Teacher
            </Link>
            <Link
              to="/admin/staffs"
              className="flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-lg hover:bg-gray-300 hover:text-gray-700"
            >
              Add Staff and Officers
            </Link>
            <Link
              to="/admin/notice"
              className="flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-lg hover:bg-gray-300 hover:text-gray-700"
            >
              Notice
            </Link>
            <Link
              to="/admin/events"
              className="flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-lg hover:bg-gray-300 hover:text-gray-700"
            >
              Event
            </Link>
            <Link
              to="/admin/achieves"
              className="flex items-center gap-2 rounded-lg px-4 py-2 font-semibold text-lg hover:bg-gray-300 hover:text-gray-700"
            >
              Achievement
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
