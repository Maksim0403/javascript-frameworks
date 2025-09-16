import type {Course} from "./course";

export class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseName: Course): void {
        this.courses = this.courses.filter(course => courseName !== courseName);
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find((course) => courseName === courseName);
    }

    listCourses(): void {
        for (const course of this.courses) {
            console.log(`Курс: ${course.name} (${course.duration} годин)`);
            console.log(`Студенти: ${course.students.join(", ") || "Немає студентів"}`);
            console.log("-----");
        }
    }
}