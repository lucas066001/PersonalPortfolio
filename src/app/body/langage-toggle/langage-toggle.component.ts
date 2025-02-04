import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-langage-toggle',
  templateUrl: './langage-toggle.component.html',
  styleUrls: ['./langage-toggle.component.css']
})
export class LangageToggleComponent {
  public isLangageNotifVisible: boolean = false;
  @ViewChild('langageToggle') langageToggle: ElementRef | undefined;
  @ViewChild('langageCard') langageCard: ElementRef | undefined;

  constructor(private renderer: Renderer2, private router: Router) {
    this.renderer.listen('window', 'click', (e: Event) => {

      if (e.target !== this.langageToggle?.nativeElement &&
        e.target !== this.langageCard?.nativeElement &&
        !this.langageToggle?.nativeElement.contains(e.target) &&
        !this.langageCard?.nativeElement.contains(e.target)) {
        this.isLangageNotifVisible = false;
      }
    });
  }

  public updateLangageNotifVisibility() {
    this.isLangageNotifVisible = !this.isLangageNotifVisible;
  }

  public checkCurrentLangage(): string {
    return location.toString().includes('/en-US') ? 'en-US' : 'fr-FR';
  }

  public getLanguageIcon(): string {
    return this.checkCurrentLangage() === 'en-US' ? 'assets/img/english_flag_icon.svg' : 'assets/img/french_flag_icon.svg';
  }
}
