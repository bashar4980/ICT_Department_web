import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Admin/Login";
import Admin from "../Pages/Admin/Admin";
import AdminLayout from "../layout/AdminLayout";
import Notice from "../Pages/Admin/Notice";
import Teachers from "../Pages/Admin/Teacher";
import Staffs from "../Pages/Admin/Staff";
// import Notice from "../Components/HomeComponent/Notice";


const router = createBrowserRouter([
    {
       path:"/",
       element:<Main></Main>,
       children:[
        {
            path:"/",
            element:<Home></Home>
        }
       ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:"/admin",
        element:<AdminLayout></AdminLayout>,
        children:[
            {
                path:"/admin",
                element:<Admin></Admin>
            }
            ,{
                path:"/admin/notice",
                element:<Notice></Notice>
            },{
                path:"/admin/teachers",
                element:<Teachers></Teachers>
            },{
                path:"/admin/staffs",
                element:<Staffs></Staffs>
            
            } 
        ]
    }
])

export default router