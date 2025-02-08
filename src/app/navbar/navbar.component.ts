import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,TranslocoPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  _translocoService = inject(TranslocoService);
  changeLang(): void {
    const htmlTag = document.documentElement;
    let lang = localStorage.getItem('lang');
      if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'en');
        this._translocoService.setActiveLang('en');
        localStorage.setItem('lang', 'en');
        lang='en'
    } else {
      htmlTag.setAttribute('dir', 'rtl');

      htmlTag.setAttribute('lang', 'ar');
      this._translocoService.setActiveLang('ar');
      localStorage.setItem('lang', 'ar');
      lang='ar'

    }
    console.log("active lang",lang)

    //update setting with new lang
    //localStorage.setItem("Language",{la})
  }

}
