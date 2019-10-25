import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import tasks from '../../routes/tasks';

export default Controller.extend({

    tasksService: service("tasks"),
    actions: {
        goToCreateTask()
        {
            this.transitionToRoute("/tasks/create");
        },

        deleteTask(taskId)
        {
            this.tasksService.deleteTask(taskId);
        },

        goToUpdateTask(taskId)
        {
            this.transitionToRoute("/tasks/" + taskId);
        }
    }
});
