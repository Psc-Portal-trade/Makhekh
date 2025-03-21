import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; // ✅ تأكد من استيراد Router

@Component({
  selector: 'app-course-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './course-header.component.html',
  styleUrls: ['./course-header.component.css']
})
export class CourseHeaderComponent implements OnInit {

  courseObj: any = {};
  originalCourseData: any = {};
  copiedCourse: any = null;
  currentStep = 0;
  allFormData: any = {};
  selectedSchedule: any[] = [];
  coupons: any[] = [{ code: '', status: 'Free', users: 'Limited', startDate: '', endDate: '' }];

  stepsRecorded_Educational_Courses = [
    {  title: 'Curriculum', completed: false },
    { title: 'Landing Page', completed: false },
    { title: 'Pricing & Promotions', completed: false },
    { title: 'Create Coupons', completed: false }
  ];
  stepsLive_Streamed_Educational_Courses = [
    { title: 'Instructor Schedules', completed: false },
    { title: 'Landing Page', completed: false },
    { title: 'Pricing & Promotions', completed: false },
    { title: 'Create Coupons', completed: false }
  ];


  sections = [{
    name: '',
    lectures: [{ title: '', video: null, videoName: '', description: '', activeTab: 'video' }]
  }];




  course = {
    title: '', description: '', language: 'English', level: 'Beginner', category: 'Design', duration: 'Week',
    video: null, photo: null, lecturer: '', lecturerDescription: ''
  };

  courseData = {
    currency: 'USD', priceTier: 'Free', promoLink: '',
    price:0,
    selectedVoucher: 'best_current_price',
    voucherOptions: [
      { value: 'best_current_price', label: 'Best current price', features: ['Fixed price', 'Unlimited quantity', 'Limited validity period'] },
      { value: 'custom_price', label: 'Custom price', features: ['Select a price between two numbers', 'Unlimited quantity', 'Limited validity period'] }
    ]
  };



  constructor(private http: HttpClient, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("📩 Received Params:", params);

      if (params['course']) {
        try {
          this.courseObj = JSON.parse(decodeURIComponent(params['course']));
          console.log('✅ Received Course Data:', this.courseObj);



        } catch (error) {
          console.error("❌ Error parsing course data:", error);
        }
      }
    });

    this.ensureMinimumRows();

  }
  ensureMinimumRows() {
    while (this.selectedSchedule.length < 1) {
      this.selectedSchedule.push({
        courseTitle: '', date: '', time: '', lecturerName: '',
        registered: '', status: '', joinLink: '', limit: ''
      });
    }
  }
  isFirstRowComplete(): boolean {
    if (this.selectedSchedule.length === 0) return false; // تأكد من وجود صف واحد على الأقل

    const firstRow = this.selectedSchedule[0]; // الحصول على الصف الأول

    return firstRow.courseTitle?.trim() !== '' &&
           firstRow.date !== '' &&
           firstRow.time !== '' &&
           firstRow.lecturerName?.trim() !== '' &&
           firstRow.registered != null && firstRow.registered !== '' &&
           firstRow.status?.trim() !== '' &&
           firstRow.joinLink?.trim() !== '' &&
           firstRow.limit != null && firstRow.limit !== '';
  }

  resetToOriginalData() {
    this.courseObj = { ...this.originalCourseData };
  }

  saveCourseData() {
    this.copiedCourse = { ...this.courseObj };
    console.log("Copied Course Data:", this.copiedCourse);
  }


  nextStep1() {
    if (this.currentStep === 0 && !this.isFirstStepValid()) {
      return;
    }

    // حفظ بيانات كل خطوة في courseObj قبل الانتقال للخطوة التالية
    switch (this.currentStep) {
      case 0:
        this.courseObj.curriculum = this.sections;
        break;
      case 1:
        this.courseObj.landingPage = { ...this.course };
        break;
      case 2:
        this.courseObj.pricing = { ...this.courseData };
        break;
      case 3:
        this.courseObj.coupons = [...this.coupons];
        this.router.navigate(['courseDetails'], { queryParams: { data: JSON.stringify(this.courseObj) } });

        break;
    }

    if (this.currentStep < this.stepsRecorded_Educational_Courses.length - 1) {
      this.currentStep++;
    }
    console.log(this.courseObj)
  }

  nextStep2() {
    console.log("Before Saving:", this.courseObj); // لمعرفة البيانات قبل الحفظ

    if (this.currentStep === 0) {
      this.courseObj.schedules = this.selectedSchedule;  // احفظ بيانات الجدول
    }
    else if (this.currentStep === 1) {
      this.courseObj.landingPage = {
        title: this.course.title,
        description: this.course.description,
        language: this.course.language,
        level: this.course.level,
        category: this.course.category,
        duration: this.course.duration,
        lecturer: this.course.lecturer,
        lecturerDescription: this.course.lecturerDescription,
        photo: this.course.photo,  // ✅ حفظ الصورة
        video: this.course.video   // ✅ حفظ الفيديو
      };
    }

    else if (this.currentStep === 2) {
      this.courseObj.pricing = {
        currency: this.courseData.currency,
        priceTier: this.courseData.priceTier,
        promoLink: this.courseData.promoLink,
        selectedVoucher: this.courseData.selectedVoucher,
        price:this.courseData.price
      };
    }
    else if (this.currentStep === 3) {
      this.courseObj.coupons = this.coupons;
      this.router.navigate(['courseDetails'], { queryParams: { data: JSON.stringify(this.courseObj) } });

    }


    // التنقل إلى الخطوة التالية
    if (this.currentStep < this.stepsLive_Streamed_Educational_Courses.length - 1) {
      this.currentStep++;
    }
console.log("Course Object:", this.courseObj);

  }






  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }



  addCoupon() {
    this.coupons.push({ code: '', status: 'Free', users: 'Limited', startDate: '', endDate: '' });
  }

  removeCoupon(index: number) {
    this.coupons.splice(index, 1);
  }



  saveData() {
    console.log('Saved Data:', this.courseData);
  }

  pastePromoLink() {
    this.courseData.promoLink = 'https://your-promo-link.com';
    console.log('Promo link pasted:', this.courseData.promoLink);
  }

  isFirstStepValid(): boolean {
    const firstSection = this.sections[0];
    if (!firstSection || firstSection.name.trim() === '') return false;
    const firstLecture = firstSection.lectures[0];
    if (!firstLecture || firstLecture.title.trim() === '') return false;
    if (!firstLecture.video || !firstLecture.description.trim()) return false;
    return true;
  }

  changeTab(sectionIndex: number, lectureIndex: number, tab: 'video' | 'description') {
    this.sections[sectionIndex].lectures[lectureIndex].activeTab = tab;
  }


  addSection() {
    this.sections.push({
      name: '',
      lectures: [{ title: '', video: null, videoName: '', description: '', activeTab: 'video' }]
    });
  }
  addLecture(sectionIndex: number) {
    this.sections[sectionIndex].lectures.push({
      title: '',
      video: null,
      videoName: '',
      description: '',
      activeTab: 'video'
    });
  }
  isStepThreeValid(): boolean {
    return !!this.course.title &&
           !!this.course.description &&
           !!this.course.language &&
           !!this.course.level &&
           !!this.course.category &&
           !!this.course.duration &&
           !!this.course.lecturer &&
           !!this.course.lecturerDescription &&
           !!this.course.photo &&  // التأكد من وجود صورة
           !!this.course.video;    // التأكد من وجود فيديو
  }


  onFileSelectedd(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      if (type === 'photo' && ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
        this.course.photo = file;
      } else if (type === 'video' && ['video/mp4', 'video/avi', 'video/mov'].includes(file.type)) {
        this.course.video = file;
      } else {
        alert(`Invalid ${type} format!`);
      }
    }
  }


  deleteRow(index: number) {
    this.selectedSchedule.splice(index, 1);
  }

  editRow(index: number, key: string, event: any) {
    if (this.selectedSchedule[index]) {
      this.selectedSchedule[index][key] = event.target.innerText.trim();
    }
  }
  addRow() {
    this.selectedSchedule.push({
      courseTitle: '', date: '', time: '', lecturerName: '',
      registered: '', status: '', joinLink: '', limit: ''
    });
  }

  onFileSelected(event: any, sectionIndex: number, lectureIndex: number) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      this.sections[sectionIndex].lectures[lectureIndex].video = file;
      this.sections[sectionIndex].lectures[lectureIndex].videoName = file.name;
    } else {
      alert("Please select a valid video file.");
    }
  }


  removeLecture(sectionIndex: number, lectureIndex: number) {
    this.sections[sectionIndex].lectures.splice(lectureIndex, 1);
  }


  removeSection(index: number) {
    this.sections.splice(index, 1);
  }

}
