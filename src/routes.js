/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
// eslint-disable-next-line
import Profile from "views/examples/Profile.js";
// eslint-disable-next-line
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
// eslint-disable-next-line
import Icons from "views/examples/Icons.js";
import Student from "views/examples/Student.js";
import Teacher from "views/examples/Teacher.js";
import Course from "views/examples/Course.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/student",
    name: "Student",
    icon: "ni ni-hat-3 text-blue",
    component: Student,
    layout: "/admin"
  },
  {
    path: "/teacher",
    name: "Teacher",
    icon: "ni ni-single-02 text-orange",
    component: Teacher,
    layout: "/admin"
  },
  {
    path: "/course",
    name: "Course",
    icon: "ni ni-books text-yellow",
    component: Course,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Report",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/register",
    name: "User",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/login",
    name: "Settings",
    icon: "ni ni-settings text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/user-profile",
    component: Profile,
    layout: "/admin"
  }
];
export default routes;
