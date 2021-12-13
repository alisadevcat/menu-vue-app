import { createRouter, createWebHistory } from "vue-router";

import Account from "@/views/Account";
import Choose from "@/views/Choose";
import Home from "@/views/Home";
import MyMenus from "@/views/MyMenus";
import StartMenu from "@/views/StartMenu";
import E404 from "@/views/E404";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "choose", path: "/choose", component: Choose },
  { name: "account", path: "/account", component: Account },
  { name: "mymenus", path: "/mymenus", component: MyMenus },
  { name: "menu", path: "/start/:concept", component: StartMenu, props: true },
  { path: "/:any(.*)", component: E404 },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;