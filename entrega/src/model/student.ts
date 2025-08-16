export class Student {

    public id: number;
    public name: string;
    public email: string;
    public course: number;
    
    constructor(id: number, name: string, email: string, course: number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.course = course;
    }

}

export let students: Student[] = [];