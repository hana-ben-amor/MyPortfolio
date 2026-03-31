import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  private translationService = inject(TranslationService);
  t = toSignal(this.translationService.translations$);

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadCv(): void {
    // CV download placeholder – replace href with actual CV file path
    const link = document.createElement('a');
    link.href = '/assets/cv-sarra-safer.pdf';
    link.download = 'Sarra-Safer-CV.pdf';
    link.click();
  }
}
