import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FirstAboutComponent } from "../first-about/first-about.component";
import { SecondAboutComponent } from "../second-about/second-about.component";
import { ThirdAboutComponent } from "../third-about/third-about.component";
import { FourthAboutComponent } from "../fourth-about/fourth-about.component";
import { SecondNavComponent } from "../../navbar/second-nav/second-nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-about-us-instructor',
  imports: [FirstAboutComponent, SecondAboutComponent, ThirdAboutComponent, FourthAboutComponent, SecondNavComponent, FooterComponent],
  templateUrl: './about-us-instructor.component.html',
  styleUrl: './about-us-instructor.component.css'
})
export class AboutUsInstructorComponent {

}
