import Service from '@ember/service';
import { A } from '@ember/array';

export default Service.extend({
    id: 0,
    tasks: null,

    init() {
        this._super(...arguments);
        this.set('tasks', A([]));
      },

    createTask(task)
    {
        task.id = this.incrementProperty("id");
        this.tasks.pushObject(task);
        console.log(this.tasks)
    },

    deleteTask(taskId)
    {
        for(let i = 0; i < this.tasks.length; i++)
        {
            if(this.tasks[i].id == taskId)
            {
                this.tasks.removeAt(i);
                return;
            }
        }   
    },

    updateTask(taskId, newTask)
    {
        for(let i = 0; i < this.tasks.length; i++)
        {
            if(this.tasks[i].id == taskId)
            {
                
                this.tasks[i] = newTask;
                return;
            }
        }
    },

    findTask(taskId)
    {
        for(let i = 0; i < this.tasks.length; i++)
        {
            if(this.tasks[i].id == taskId)
            {
                
                return this.tasks[i];
            }
        }
        return null;
    }

});
