import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(true);

  constructor() {
    // Apply class to <html> whenever isDark changes
    effect(() => {
      if (this.isDark()) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    });
  }

  toggle(): void {
    this.isDark.update((v) => !v);
  }
}
