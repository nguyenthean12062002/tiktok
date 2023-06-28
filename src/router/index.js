import Home from "~/pages/Home";
import Flowing from "~/pages/Flowing";
import Profile from "~/pages/Profile";
import UpdateVideo from "~/pages/UpdateVideo";
import Search from "~/pages/Search";
import { HeaderOnly } from "~/Layout";
export const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/flowing",
    component: Flowing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/updatevideo",
    component: UpdateVideo,
    layout: null,
  },
  {
    path: "/search",
    component: Search,
    layout: HeaderOnly,
  },
];
export const privateRouter = [];
