function solveClasses() {

    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            if (priority === 'high') {
                this.tasks.unshift({id, taskName, priority});
            } else {
                this.tasks.push({id, taskName, priority});
            }

            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() {
            if (this.tasks.length === 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            } else {
                return this.tasks.shift().taskName;
            }
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            let result = `Tasks, that need to be completed:\n`;
            this.tasks.forEach(task => {
                result += `${task.id}: ${task.taskName} - ${task.priority}\n`;
            });
            
            return result.trim();
        }
    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.bonus = bonus;
            this.experience = experience;
            this.baseSalary = 1000 + bonus;
        }

        learn(years) {
            this.experience = this.experience + years;
        }
    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName);
            this.bonus = bonus;
            this.experience = experience;
            this.baseSalary = 1000 + bonus;
            this.experience = experience + 5;
        }

        changeTaskPriority(taskId) {
            this.tasks.forEach((taskEl, i) => {
                if (taskEl.id === taskId) {
                    const task = taskEl;
                    const priority = task.priority;
                    if (priority === 'high') {
                        task.priority = 'low';
                        this.tasks.splice(i, 1);
                        this.tasks.push(task);
                    } else {
                        task.priority = 'high';
                        this.tasks.splice(i, 1);
                        this.tasks.unshift(task);
                    }
                    return task;
                }
            });
        }
    }


    return {
        Developer,
        Junior,
        Senior
    }
}
