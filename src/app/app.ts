import { Component, inject, OnInit } from '@angular/core';
import { DocsSidebarComponent } from './components/docs-sidebar/docs-sidebar';
import { DocsContentComponent } from './components/docs-content/docs-content';
import { CircuitBgComponent } from './components/circuit-bg/circuit-bg';
import { DocsService } from './services/docs.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocsSidebarComponent, DocsContentComponent, CircuitBgComponent],
  templateUrl: './app.html'
})
export class App implements OnInit {
  docs = inject(DocsService);

  ngOnInit() {
    this.docs.loadAll();
  }
}
