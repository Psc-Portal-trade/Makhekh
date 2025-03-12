import { Component } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'app-header-section',
  imports: [TranslocoPipe],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css'
})
export class HeaderSectionComponent {

}
