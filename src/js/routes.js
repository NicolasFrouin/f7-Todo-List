import HomePage from "../pages/home.f7";
import AboutPage from "../pages/about.f7";
import FormPage from "../pages/form.f7";

import LeftPage1 from "../pages/left-page-1.f7";
import LeftPage2 from "../pages/left-page-2.f7";
import DynamicRoutePage from "../pages/dynamic-route.f7";
import RequestAndLoad from "../pages/request-and-load.f7";
import NotFoundPage from "../pages/404.f7";

import * as Type from "../pages/Types";
import * as Task from "../pages/Tasks";
import * as List from "../pages/Lists";

var routes = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/task/list/",
		component: Task.TaskList,
	},
	{
		path: "/task/detail/:idTask",
		component: Task.TaskDetail,
	},
	{
		path: "/task/create/",
		component: Task.TaskCreate,
	},
	{
		path: "/task/update/:idTask",
		component: Task.TaskUpdate,
	},
	{
		path: "/list/list/",
		component: List.ListList,
	},
	{
		path: "/list/detail/:idList",
		component: List.ListDetail,
	},
	{
		path: "/list/create/",
		component: List.ListCreate,
	},
	{
		path: "/list/update/:idList",
		component: List.ListUpdate,
	},
	{
		path: "/type/list/",
		component: Type.TypeList,
	},
	{
		path: "/type/detail/:idType",
		component: Type.TypeDetail,
	},
	{
		path: "/type/create/",
		component: Type.TypeCreate,
	},
	{
		path: "/type/update/:idType",
		component: Type.TypeUpdate,
	},
	{
		path: "/about/",
		component: AboutPage,
	},
	{
		path: "/form/",
		component: FormPage,
	},
	{
		path: "/left-page-1/",
		component: LeftPage1,
	},
	{
		path: "/left-page-2/",
		component: LeftPage2,
	},
	{
		path: "/dynamic-route/blog/:blogId/post/:postId/",
		component: DynamicRoutePage,
	},
	{
		path: "/request-and-load/user/:userId/",
		async: function ({ router, to, resolve }) {
			// App instance
			var app = router.app;

			// Show Preloader
			app.preloader.show();

			// User ID from request
			var userId = to.params.userId;

			// Simulate Ajax Request
			setTimeout(function () {
				// We got user data from request
				var user = {
					firstName: "Vladimir",
					lastName: "Kharlampidi",
					about: "Hello, i am creator of Framework7! Hope you like it!",
					links: [
						{
							title: "Framework7 Website",
							url: "http://framework7.io",
						},
						{
							title: "Framework7 Forum",
							url: "http://forum.framework7.io",
						},
					],
				};
				// Hide Preloader
				app.preloader.hide();

				// Resolve route to load page
				resolve(
					{
						component: RequestAndLoad,
					},
					{
						props: {
							user: user,
						},
					}
				);
			}, 1000);
		},
	},
	{
		path: "(.*)",
		component: NotFoundPage,
	},
];

export default routes;
