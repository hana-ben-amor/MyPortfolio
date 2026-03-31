import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private translationService = inject(TranslationService);
  t = toSignal(this.translationService.translations$);

  languages = [
    { name: 'Arabic', level: 'C2', flag: '🇹🇳', percent: 100 },
    { name: 'French', level: 'C1', flag: '🇫🇷', percent: 88 },
    { name: 'English', level: 'B2', flag: '🇬🇧', percent: 72 },
    { name: 'German', level: 'A2', flag: '🇩🇪', percent: 28 },
  ];

  certifications = [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      period: '2023 – 2027',
      icon: '☁️',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      period: '2023 – 2027',
      icon: '🌩️',
    },
    {
      name: 'CCNA v2',
      period: '2023',
      icon: '🌐',
    },
  ];
}
