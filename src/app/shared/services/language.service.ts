import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LocalStorageEnum} from '../enums/local-storage.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languages: string[] = ['en', 'fr'];

  constructor(public translate: TranslateService) {
    let browserLang: any;
    translate.addLangs(this.languages);
    if (localStorage.getItem(LocalStorageEnum.LANGUAGE)) {
      browserLang = localStorage.getItem(LocalStorageEnum.LANGUAGE);
    } else {
      browserLang = translate.getBrowserLang();
    }
    translate.use(this.getLanguage(browserLang) ? browserLang : 'fr');
  }

  private getLanguage(browserLang: string): string | null {
    if (browserLang === 'en') {
      return 'en';
    } else if (browserLang === 'fr') {
      return 'fr';
    } else if (browserLang === 'es') {
      return 'es';
    } else {
      return null;
    }
  }

  public setLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem(LocalStorageEnum.LANGUAGE, lang);
  }

}
