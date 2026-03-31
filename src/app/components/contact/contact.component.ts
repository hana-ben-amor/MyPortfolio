import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_xrku3t2';
const EMAILJS_TEMPLATE_ID = 'template_eot0mit';
const EMAILJS_PUBLIC_KEY = '8GzOsp6CA8aOvstCA';

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

  isError = signal(false);

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSending.set(true);
    this.isError.set(false);

    const { name, email, message } = this.contactForm.value;

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      { from_name: name, reply_to: email, message },
      EMAILJS_PUBLIC_KEY
    ).then(() => {
      this.isSending.set(false);
      this.isSuccess.set(true);
      this.contactForm.reset();
      setTimeout(() => this.isSuccess.set(false), 6000);
    }).catch(() => {
      this.isSending.set(false);
      this.isError.set(true);
      setTimeout(() => this.isError.set(false), 6000);
    });
  }

  contactInfo = [
    { icon: 'email', value: 'hanaamor5@gmail.com', href: 'mailto:hanaamor5@gmail.com' },
    { icon: 'phone', value: '+(216) 99963900', href: 'tel:+21699963900' },
    { icon: 'location', value: 'Monastir, Tunisia', href: null },
    { icon: 'linkedin', value: 'linkedin.com/in/hana-ben-amor-b738771ab', href: 'https://www.linkedin.com/in/hana-ben-amor-b738771ab/' },
    { icon: 'github', value: 'github.com/hana-ben-amor', href: 'https://github.com/hana-ben-amor' },
  ];
}
