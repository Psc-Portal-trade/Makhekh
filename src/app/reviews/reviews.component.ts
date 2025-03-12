import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import { LangService } from '../services/lang.service';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reviews',
  imports: [FormsModule, CommonModule, SidebarComponent,TranslocoPipe,RouterLink],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  activeTab: string = 'instructorRating';
  selectedCourse: string = 'All Courses';

  // بيانات الكورسات المختلفة
  coursesData: any = {
    'Course 1': { instructorRating: 4 },
    'Course 2': { instructorRating: 3.5 },
    'Course 3': { instructorRating: 5 }
  };

  // حساب متوسط التقييمات عند تحميل الصفحة
  instructorRating: number = this.calculateAverageRating();

  // حساب المتوسط الحسابي لتقييمات الكورسات
  calculateAverageRating(): number {
    const ratings = Object.values(this.coursesData).map(course => (course as any).instructorRating);
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return ratings.length ? parseFloat((sum / ratings.length).toFixed(1)) : 0;
  }

  // تغيير القيم عند اختيار كورس معين
  changeCourse(course: string) {
    this.selectedCourse = course;
    if (course === 'All Courses') {
      this.instructorRating = this.calculateAverageRating();
    } else {
      this.instructorRating = this.coursesData[course]?.instructorRating || 0;
    }
  }

  // توليد تقرير PDF عند الضغط على "Extract Report"
  exportReport() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Performance Report - ${this.selectedCourse}`, 20, 20);
    doc.text(`Instructor Rating: ${this.instructorRating} stars`, 20, 40);
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
