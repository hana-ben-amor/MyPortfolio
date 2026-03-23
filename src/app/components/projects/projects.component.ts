import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private translationService = inject(TranslationService);
  t = toSignal(this.translationService.translations$);

  githubUrl = 'https://github.com/hana-ben-amor';
}
