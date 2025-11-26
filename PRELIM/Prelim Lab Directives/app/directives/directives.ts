import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  monthNameStatic: string = 'Jan'
  monthNameDynamic: string = 'Oct'

  cityList: string[] = ["Angeles", "San Fernnado", "Mabalacat", "Tarlac", "Bataan"]

studentList: any[ ] = [
   { stud_name: 'D Esquivel', course: 'Web Development', isActive: false },
  { stud_name: 'D Dizon', course: 'Network Administration', isActive: false },
  { stud_name: 'F Alejandro', course: 'Systems Development', isActive: false },
  { stud_name: 'D David', course: 'CyberSecurity', isActive: false },
  { stud_name: 'C Quintana', course: 'Web Development', isActive: true }
]


  showNote() {
    this.isNoteVisible = true;
  }
  hideNote() {
    this.isNoteVisible = false;
  }
  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
