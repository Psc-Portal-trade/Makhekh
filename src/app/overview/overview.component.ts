import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jsPDF } from "jspdf";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { LangService } from '../services/lang.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FormsModule,CommonModule,SidebarComponent,TranslocoPipe,RouterLink],
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  activeTab: string = 'revenue';
  selectedCourse: string = 'All Courses';

  // بيانات الكورسات المختلفة
  coursesData: any = {
    'All Courses': { totalRevenue: 10000, totalEnrollments: 150, totalSales: 200 },
    'Course 1': { totalRevenue: 5000, totalEnrollments: 75, totalSales: 100 },
    'Course 2': { totalRevenue: 7000, totalEnrollments: 90, totalSales: 120 },
    'Course 3': { totalRevenue: 12000, totalEnrollments: 200, totalSales: 250 }
  };

  // القيم الافتراضية عند تحميل الصفحة
  totalRevenue: number = this.coursesData['All Courses'].totalRevenue;
  totalEnrollments: number = this.coursesData['All Courses'].totalEnrollments;
  totalSales: number = this.coursesData['All Courses'].totalSales;

  // تغيير القيم عند اختيار كورس معين
  changeCourse(course: string) {
    this.selectedCourse = course;
    this.totalRevenue = this.coursesData[course].totalRevenue;
    this.totalEnrollments = this.coursesData[course].totalEnrollments;
    this.totalSales = this.coursesData[course].totalSales;
  }

  // توليد تقرير PDF عند الضغط على "Extract Report"
  exportReport() {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Performance Report - ${this.selectedCourse}`, 20, 20);
    doc.text(`Total Revenue: ${this.totalRevenue} LE`, 20, 40);
    doc.text(`Total Enrollments: ${this.totalEnrollments}`, 20, 50);
    doc.text(`Total Sales: ${this.totalSales}`, 20, 60);
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
