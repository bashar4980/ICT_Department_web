import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Admin/Login";
import Admin from "../Pages/Admin/Admin";
import AdminLayout from "../layout/AdminLayout";
import Notice from "../Pages/Admin/Notice";
import Teachers from "../Pages/Admin/Teacher";
import Staffs from "../Pages/Admin/Staff";
import Events from "../Pages/Admin/Event";
import Achievements from "../Pages/Admin/Achievement";
import FaculityMember from "../Pages/AboutICT/FaculityMember";
import StaffandOfficers from "../Pages/AboutICT/StaffandOfficers";
import Department from "../Pages/AboutICT/Department";
import NoticeContainer from "../Pages/Notice/Notice";



const router = createBrowserRouter([
    {
       path:"/",
       element:<Main></Main>,
       children:[
        {
            path:"/",
            element:<Home></Home>
        },{
            path:"/faculty",
            element:<FaculityMember></FaculityMember>
        },{
            path:"/staff",
            element:<StaffandOfficers></StaffandOfficers>
        },{
            path:"/dept",
            element:<Department></Department>
        },{
            path:"/notice",
            element:<NoticeContainer></NoticeContainer>
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
            
            } ,
            {
                path:"/admin/events",
                element:<Events></Events>
            }
            ,{
                path:"/admin/achieves",
                element:<Achievements></Achievements>
            
            } 
        ]
    }
])

export default router