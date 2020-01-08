import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import SkillTree from "../views/SkillTree.vue";
import NotFoundPage from "../views/errors/404.vue";

Vue.use(VueRouter);



export default new VueRouter({
	mode: "history",

	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			component: Home
		},

		{
			path: "/:character",
			component: SkillTree
		},

		{
			path: "*",
			component: NotFoundPage
		}
	]
});