import { Component, inject, signal, HostListener, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private translationService = inject(TranslationService);
  themeService = inject(ThemeService);

  t = toSignal(this.translationService.translations$);
  currentLang = toSignal(this.translationService.currentLang$);

  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navItems = computed(() => {
    const t = this.t();
    if (!t) return [];
    return [
      { id: 'home', label: t.nav.home },
      { id: 'about', label: t.nav.about },
      { id: 'experience', label: t.nav.experience },
      { id: 'projects', label: t.nav.projects },
      { id: 'skills', label: t.nav.skills },
      { id: 'contact', label: t.nav.contact },
    ];
  });

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  scrollTo(id: string): void {
    this.closeMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
