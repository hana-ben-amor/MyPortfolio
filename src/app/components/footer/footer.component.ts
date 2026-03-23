import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private translationService = inject(TranslationService);
  t = toSignal(this.translationService.translations$);

  year = new Date().getFullYear();

  socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/hana-ben-amor',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hana-ben-amor-b738771ab/',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:hanaamor5@gmail.com',
      icon: 'email',
    },
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
