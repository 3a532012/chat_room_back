import CommonController from "../controller/CommonController"
import Route from "./RouteInterface";

class CommonRoute extends Route {
    private commonController = new CommonController();

    constructor() {
        super();
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/notFound', this.commonController.notFound);
    }
}

export default CommonRoute;