import {CourseManager} from "./courseManager";
import type {Course} from "./course";
import {OnlineCourse} from "./onlineCourse";

const jsCourse = new OnlineCourse("JavaScript", 40);
const tsCourse = new OnlineCourse("TypeScript", 30);
const reactCourse = new OnlineCourse("React", 50);

const manager = new CourseManager();

manager.addCourse(jsCourse);
manager.addCourse(tsCourse);
manager.addCourse(reactCourse);

jsCourse.registerStudent("Іван");
jsCourse.registerStudent("Марія");
tsCourse.registerStudent("Олена");
reactCourse.registerStudent("Іван");
reactCourse.registerStudent("Петро");

manager.listCourses();