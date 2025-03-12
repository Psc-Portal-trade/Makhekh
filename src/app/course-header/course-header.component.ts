import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, ActivatedRoute } from '@angular/router';

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
    // { title: 'Instructor Schedules', completed: false },
    { title: 'Landing Page', completed: false },
    { title: 'Pricing & Promotions', completed: false },
    { title: 'Create Coupons', completed: false }
  ];
  stepsLive_Streamed_Educational_Courses = [
    // {  title: 'Curriculum', completed: false },
    { title: 'Instructor Schedules', completed: false },
    { title: 'Landing Page', completed: false },
    { title: 'Pricing & Promotions', completed: false },
    { title: 'Create Coupons', completed: false }
  ];


  sections = [{
    name: '',
    lectures: [{ title: '', video: null, videoName: '', description: '', activeTab: 'video' }]
  }];

  scheduleData: any[] = [
    { courseTitle: 'Course A', date: '2024-03-01', time: '10:00 AM', lecturerName: 'John Doe', registered: '20', status: 'Completed', joinLink: 'https://linkA.com', limit: '50' }
  ];

  scheduleData2: any[] = [
    { courseTitle: 'Course B', date: '2024-03-02', time: '02:00 PM', lecturerName: 'Jane Smith', registered: '15', status: 'In progress', joinLink: 'https://linkB.com', limit: '30' }
  ];

  course = {
    title: '', description: '', language: 'English', level: 'Beginner', category: 'Design', duration: 'Week',
    video: null, photo: null, lecturer: '', lecturerDescription: ''
  };

  courseData = {
    currency: 'USD', priceTier: 'Free', promoLink: '',
    selectedVoucher: 'best_current_price',
    voucherOptions: [
      { value: 'best_current_price', label: 'Best current price', features: ['Fixed price', 'Unlimited quantity', 'Limited validity period'] },
      { value: 'custom_price', label: 'Custom price', features: ['Select a price between two numbers', 'Unlimited quantity', 'Limited validity period'] }
    ]
  };
  options = [
    { name: 'Schedule 1', value: 'scheduleData' },
  ];

  selectedScheduleIndex: number = 0;


  selectSchedule(index: number) {
    this.selectedScheduleIndex = index;
    const schedule = index === 0 ? this.scheduleData : this.scheduleData2;

    // عرض أول 5 صفوف فقط
    this.selectedSchedule = schedule.slice(0, 5);
  }
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

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
    if (this.selectedSchedule.length === 0) return false; // تأكد من أن هناك على الأقل صفًا واحدًا

    const firstRow = this.selectedSchedule[0]; // الحصول على الصف الأول

    return !!firstRow.courseTitle.trim() &&
           !!firstRow.date.trim() &&
           !!firstRow.time.trim() &&
           !!firstRow.lecturerName.trim() &&
           !!firstRow.registered.trim() &&
           !!firstRow.status.trim() &&
           !!firstRow.joinLink.trim() &&
           !!firstRow.limit.trim();
  }
  resetToOriginalData() {
    this.courseObj = { ...this.originalCourseData };
  }

  saveCourseData() {
    this.copiedCourse = { ...this.courseObj };
    console.log("Copied Course Data:", this.copiedCourse);
  }

  saveStepData() {
    this.allFormData[`step_${this.currentStep}`] = {
      sections: JSON.parse(JSON.stringify(this.sections)),
      schedule: JSON.parse(JSON.stringify(this.selectedSchedule)),
      course: JSON.parse(JSON.stringify(this.course)),
      pricing: JSON.parse(JSON.stringify(this.courseData)),
      coupons: JSON.parse(JSON.stringify(this.coupons))
    };
  }

  nextStep1() {
    if (this.currentStep === 0 && !this.isFirstStepValid()) {
      return;
    }

    if (this.currentStep < this.stepsRecorded_Educational_Courses.length - 1) {
      this.currentStep++;
      if (this.currentStep === 1) {
        this.loadScheduleData();
      }
    }
  }
  nextStep2() {


    if (this.currentStep < this.stepsRecorded_Educational_Courses.length - 1) {
      this.currentStep++;
      if (this.currentStep === 1) {
        this.loadScheduleData();
      }
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  loadScheduleData() {
    this.http.get<any[]>('https://api.example.com/schedules').subscribe(
      data => { this.scheduleData = data; },
      error => { console.error('Error fetching schedule data', error); }
    );
  }



  addCoupon() {
    this.coupons.push({ code: '', status: 'Free', users: 'Limited', startDate: '', endDate: '' });
  }

  removeCoupon(index: number) {
    this.coupons.splice(index, 1);
  }

  submitForReview() {
    console.log("🚀 Submitted Data:", JSON.stringify({
      sections: this.sections, schedules: this.selectedSchedule, course: this.course,
      pricing: this.courseData, coupons: this.coupons
    }, null, 2));
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
