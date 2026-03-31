import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private translationService = inject(TranslationService);
  private fb = inject(FormBuilder);

  t = toSignal(this.translationService.translations$);

  isSending = signal(false);
  isSuccess = signal(false);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get nameControl() { return this.contactForm.get('name')!; }
  get emailControl() { return this.contactForm.get('email')!; }
  get messageControl() { return this.contactForm.get('message')!; }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSending.set(true);
    // Simulate sending (replace with real API call)
    setTimeout(() => {
      this.isSending.set(false);
      this.isSuccess.set(true);
      this.contactForm.reset();
      setTimeout(() => this.isSuccess.set(false), 6000);
    }, 1500);
  }

  contactInfo = [
    { icon: 'email', value: 'sarasafer59@gmail.com', href: 'mailto:sarasafer59@gmail.com' },
    { icon: 'phone', value: '+49 155 10055903', href: 'tel:+4915510055903' },
    { icon: 'location', value: 'Mannheim, Germany', href: null },
    { icon: 'linkedin', value: 'linkedin.com/in/sarrasafer', href: 'https://www.linkedin.com/in/sarrasafer' },
    { icon: 'github', value: 'github.com/sarasafer59', href: 'https://github.com/sarasafer59' },
  ];
}
