import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { LangService } from '../services/lang.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [FormsModule,CommonModule,SidebarComponent,TranslocoPipe,RouterLink],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  activeTab: string = 'NoOfStudent';
  selectedCourse: string = 'All Courses';

  // بيانات الكورسات المختلفة
  coursesData: any = {
    'All Courses': { NoOfStudent: 10000, NoOfStudentCompletedTheCourse: 150, StudentsSuggestions: 200 ,NoOfQuestions: 150 },
    'Course 1': { NoOfStudent: 5000, NoOfStudentCompletedTheCourse: 75, StudentsSuggestions: 10 ,NoOfQuestions: 150},
    'Course 2': { NoOfStudent: 7000, NoOfStudentCompletedTheCourse: 90, StudentsSuggestions: 120 ,NoOfQuestions: 150},
    'Course 3': { NoOfStudent: 12000, NoOfStudentCompletedTheCourse: 200, StudentsSuggestions: 250 ,NoOfQuestions: 150}
  };

  // القيم الافتراضية عند تحميل الصفحة
  NoOfStudent: number = this.coursesData['All Courses'].NoOfStudent;
  NoOfStudentCompletedTheCourse: number = this.coursesData['All Courses'].NoOfStudentCompletedTheCourse;
  StudentsSuggestions: number = this.coursesData['All Courses'].StudentsSuggestions;
  NoOfQuestions: number = this.coursesData['All Courses'].NoOfQuestions;
  // تغيير القيم عند اختيار كورس معين
  changeCourse(course: string) {
    this.selectedCourse = course;
    this.NoOfStudent = this.coursesData[course].NoOfStudent;
    this.NoOfStudentCompletedTheCourse = this.coursesData[course].NoOfStudentCompletedTheCourse;
    this.StudentsSuggestions = this.coursesData[course].StudentsSuggestions;
    this.NoOfQuestions = this.coursesData[course].NoOfQuestions;

  }

  // توليد تقرير PDF عند الضغط على "Extract Report"
  exportReport() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Performance Report - ${this.selectedCourse}`, 20, 20);
    doc.text(`No of students: ${this.NoOfStudent} LE`, 20, 40);
    doc.text(`No of student completed the course: ${this.NoOfStudentCompletedTheCourse}`, 20, 50);
    doc.text(`Students suggestions: ${this.StudentsSuggestions}`, 20, 60);
    doc.text(`No of questions: ${this.NoOfQuestions}`, 20, 70);

    doc.save(`${this.selectedCourse}-report.pdf`);
  }

  // تعيين التبويب النشط
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }






 logoSrc: string = 'assets/Logo AR.png';

  constructor(private langService: LangService) {
    this.setLogo();
  }

  _translocoService = inject(TranslocoService);

  ngOnInit(): void {
    this.langService.lang$.subscribe((lang) => {
      this.logoSrc = lang === 'ar' ? 'assets/Logo AR.png' : 'assets/Logo EN.png';
    });
  }

  changeLang(): void {
    const htmlTag = document.documentElement;
    let lang = localStorage.getItem('lang');
    if (lang === 'ar') {
      htmlTag.setAttribute('dir', 'ltr');
      htmlTag.setAttribute('lang', 'en');
      this._translocoService.setActiveLang('en');
      this.langService.setLang('en');
    } else {
      htmlTag.setAttribute('dir', 'rtl');
      htmlTag.setAttribute('lang', 'ar');
      this._translocoService.setActiveLang('ar');
      this.langService.setLang('ar');
    }
    console.log('active lang', lang);
  }

  setLogo(): void {
    const lang = localStorage.getItem('lang');
    this.logoSrc = lang === 'ar' ? 'assets/Logo AR.png' : 'assets/Logo EN.png';
  }





}
