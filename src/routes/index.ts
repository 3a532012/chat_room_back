import Route from "./RouteInterface";
import MessageRoute from "./MessageRoute";
import CommonRoute from "./CommonRoute"

export const router: Array<Route> = [
    new MessageRoute(),
    new CommonRoute()
];