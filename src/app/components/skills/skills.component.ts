import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslationService } from '../../services/translation.service';

interface SkillGroup {
  key: 'devops' | 'cloud' | 'languages' | 'web';
  icon: string;
  color: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  private translationService = inject(TranslationService);
  t = toSignal(this.translationService.translations$);

  skillGroups: SkillGroup[] = [
    {
      key: 'devops',
      icon: '⚙️',
      color: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab', 'Grafana', 'Prometheus', 'Kafka'],
    },
    {
      key: 'cloud',
      icon: '☁️',
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
      items: ['AWS', 'Packer', 'Terraform'],
    },
    {
      key: 'languages',
      icon: '💻',
      color: 'from-purple-500/20 to-violet-500/20 border-purple-500/30',
      items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'NoSQL', 'C++', 'C'],
    },
    {
      key: 'web',
      icon: '🌐',
      color: 'from-green-500/20 to-teal-500/20 border-green-500/30',
      items: ['Spring Boot', 'Angular', 'React', 'Next.js', 'Node.js', 'HTML', 'CSS'],
    },
  ];
}
