import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({

    tasksService: service("tasks"),

    model: function(params) {
        this.set('taskId', params.taskId);
    },

    setupController: function(controller, model) {
        controller.set("task", this.tasksService.findTask(this.get("taskId")))
        controller.set('taskId', this.get('taskId'));
    }
});
