import { render } from "./../node_modules/lit-html/lit-html.js";
import auth from "./services/authService.js";
import studentsTemplate from "./templates/studentsTemplate.js";

let students = [];

async function solve() {
   let buttonElement = document.querySelector('#searchBtn').addEventListener('click', onClick);
   let tbodyElement = document.querySelector('tbody');

   let studentsRawData = await auth.get();

   for (const student of Object.values(studentsRawData)) {
      students.push({
         name: `${student.firstName} ${student.lastName}`,
         email: student.email,
         course: student.course,
         class: undefined
      })
   }

   renderStudents();

   function renderStudents() {
      render(studentsTemplate.allStudentsTemplate(students), tbodyElement);
   }

   function onClick() {
      let inputElement = document.querySelector('tfoot input');
      let searchWord = inputElement.value.toLowerCase();

      for (const student of students) {
         if ((student.email.toLowerCase().includes(searchWord) ||
            student.name.toLowerCase().includes(searchWord) ||
            student.course.toLowerCase().includes(searchWord)) &&
            searchWord !== '') {
            student.class = 'select';
         } else {
            student.class = undefined;
         }
      }
      renderStudents();
      inputElement.value = '';
   }
}

solve();