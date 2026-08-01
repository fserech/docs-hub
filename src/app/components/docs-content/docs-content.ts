import { Component, inject } from '@angular/core';
import { DocsService } from '../../services/docs.service';

@Component({
  selector: 'app-docs-content',
  standalone: true,
  templateUrl: './docs-content.html'
})
export class DocsContentComponent {
  docs = inject(DocsService);

  async copy(code: string, event: Event) {
    const btn = event.currentTarget as HTMLButtonElement;
    const icon = btn.querySelector('[data-copy-icon]') as SVGElement | null;
    const label = btn.querySelector('[data-copy-label]') as HTMLElement | null;
    if (!label) return;

    await navigator.clipboard.writeText(code);

    const originalIcon = icon?.innerHTML;
    label.textContent = 'copiado';
    btn.classList.add('text-green');

    if (icon) {
      icon.innerHTML = '<polyline points="20 6 9 17 4 12"/>';
    }

    setTimeout(() => {
      label.textContent = 'copiar';
      btn.classList.remove('text-green');
      if (icon && originalIcon) icon.innerHTML = originalIcon;
    }, 1400);
  }
}
