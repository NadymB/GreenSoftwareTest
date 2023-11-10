import { Home } from "../pages";

const publicRoute = [
  { path: "/", component: Home },
  { path: "/how-to-play", component: Home },
  { path: "/tokens", component: Home },
  { path: "/plogs", component: Home },
  { path: "/help", component: Home },
  { path: "/contact-us", component: Home },
];

const privateRoute = [];

export { publicRoute, privateRoute };
