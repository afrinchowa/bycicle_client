import Offered from "../pages/user/Offered";
import UserDashboard from "../pages/user/UserDashboard";


export const userPaths = [
  {name:'Dashboard',
    path: "dashboard",
    element: <UserDashboard />,
  },
  {name:'Offered Course',
    path: "offered-course",
    element: <Offered/>,
  },

];
