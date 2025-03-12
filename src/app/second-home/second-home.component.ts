import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { HeaderSectionComponent } from '../home/header-section/header-section.component';
import { ContinueLearningComponent } from './continue-learning/continue-learning.component';
import { RecommendedVideosComponent } from './recommended-videos/recommended-videos.component';
import { FeaturedCoursesComponent } from './featured-courses/featured-courses.component';
import { SecondNavComponent } from "../navbar/second-nav/second-nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-second-home',
  imports: [CoursesComponent, HeaderSectionComponent, ContinueLearningComponent, RecommendedVideosComponent, FeaturedCoursesComponent, SecondNavComponent],
  templateUrl: './second-home.component.html',
  styleUrl: './second-home.component.css'
})
export class SecondHomeComponent {

}
