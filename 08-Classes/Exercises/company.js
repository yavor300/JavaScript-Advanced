class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(username, salary, position, department) {
        const employee = new Employee(username, salary, position);

        if (this.departments.has(department)) {
            const departmentToEdit = this.departments.get(department);
            departmentToEdit.addEmployee(employee);
        } else {
            const departmentToAdd = new Department(department);
            departmentToAdd.addEmployee(employee);
            this.departments.set(department, departmentToAdd);
        }
    }

    bestDepartment() {    
        const bestDepartment = Array.from(this.departments).sort((f, s) => s[1].calculateAverage() - f[1].calculateAverage())[0];
        
        let result = `Best Department is: ${bestDepartment[1].name}\nAverage salary: ${bestDepartment[1].calculateAverage().toFixed(2)}\n`;

        bestDepartment[1].employees.sort((f, s) => s.salary - f.salary).forEach(e => {
            result += `${e.username} ${e.salary} ${e.position}\n`;
        });
        
        return result;
    }
}

class Employee {
    constructor(username, salary, position) {
        this.username = username;
        this.salary = salary;
        this.position = position;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        if (!value) {
            throw new Error('Invalid input!');
        }
        this._username = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value < 0) {
            throw new Error('Invalid input!');
        }
        this._salary = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        if (!value) {
            throw new Error('Invalid input!');
        }
        return this._position = value;
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (!value) {
            throw new Error('Invalid input!');
        }
        this._name = value;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateAverage() {
        let totalSalaries = 0;
        this.employees.forEach(e => totalSalaries += e.salary);
        return totalSalaries / this.employees.length;
    }
}

