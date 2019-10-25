import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({

    tasksService: service("tasks"),

    model(){
        return this.tasksService.tasks;
    }
});
