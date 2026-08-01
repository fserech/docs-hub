import { Component, inject } from '@angular/core';
import { DocsService } from '../../services/docs.service';

@Component({
  selector: 'app-docs-sidebar',
  standalone: true,
  templateUrl: './docs-sidebar.html'
})
export class DocsSidebarComponent {
  docs = inject(DocsService);

  select(techId: string) {
    this.docs.setActive(techId);
  }
}
