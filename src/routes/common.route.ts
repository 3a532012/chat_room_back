import CommonController from "../controller/CommonController"
import Route from "./route";

class MessageRoute extends Route {
    private commonController = new CommonController();

    constructor() {
        super();
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/notFound', this.commonController.notFound);
    }
}

export default MessageRoute;