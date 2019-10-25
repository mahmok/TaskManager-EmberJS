import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

    tasksService: service("tasks"),

    task:{title: "", description: "", isDone: false, createdAt: new Date()},

    

    actions: {
        goBack()
        {
            this.transitionToRoute("/tasks")
        },

        createTask()
        {
            this.tasksService.createTask(this.task);
            this.set("task", {title: "", description: "", isDone: false, createdAt: new Date()})
        }

    }
});
