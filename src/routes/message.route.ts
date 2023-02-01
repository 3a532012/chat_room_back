import MessageController from "../controller/MessageController"
import Route from "./route";

class MessageRoute extends Route {
    private messageController = new MessageController();

    constructor() {
        super();
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/login', this.messageController.echo);
    }
}

export default MessageRoute;