import HYDiscover from "../pages/discover/index";
import HYFriend from "../pages/friend/index";
import HYMine from "../pages/mine/index";
const routes=[
 {
     path: "/",
     exact:true,
     component: HYDiscover
 },
 {
    path: "/Mine",
    exact:true,
    component: HYMine
},
{
    path: "/friend",
    exact:true,
    component: HYFriend
}
];

export default routes;