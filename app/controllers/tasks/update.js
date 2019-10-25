import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({


    tasksService: service("tasks"),

    actions: {
        goBack()
        {
            this.transitionToRoute("/tasks")
        },

        update(task)
        {
            this.tasksService.updateTask(task.id, task);
            alert("Task Updated")
        },

        onSelectChange(event)
        {
            console.log(event.target.value);

            this.set("task.isDone", event.target.value);
            console.log(this.get("task"));
        }

    }
});
