import { createRouter, createWebHistory } from "vue-router";

import Account from "@/views/Account";
import Choose from "@/views/Choose";
import Start from "@/views/Start";
import Home from "@/views/Home";
import MyMenus from "@/views/MyMenus";

const routes = [
  { path: "/", component: Home },
  { path: "/choose", component: Choose },
  { path: "/start", component: Start },
  { path: "/account", component: Account },
  { path: "/mymenus", component: MyMenus },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;