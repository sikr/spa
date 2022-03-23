import HomeView from "./views/HomeView.js";
import View1 from "./views/View-1.js";
import View2 from "./views/View-2.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}
const routes = [{
        path: "/",
        view: HomeView
    },
    {
        path: "/view-1",
        view: View1
    },
    {
        path: "/view-2",
        view: View2
    }
];

const router = async () => {
    // create a map of routes and mark matching route
    const routingMap = routes.map(route => {
        return {
            route: route,
            found: location.pathname === route.path
        }
    });

    let destination = routingMap.find(routingMap => routingMap.found)

    if (!destination) {
        destination = {
            route: routes[0],
            found: true
        }
    }
    const view = new destination.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})