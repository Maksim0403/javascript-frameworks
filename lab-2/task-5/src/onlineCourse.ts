import type {Course} from "./course";

export class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
        this.students = [];
    }

    registerStudent(student: string): void {
        this.students.push(student);
        console.log(`Студент ${student} зарахований на курс ${this.name}`);
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}