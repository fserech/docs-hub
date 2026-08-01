import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Technology } from '../interface/docs.interface';

@Injectable({ providedIn: 'root' })
export class DocsService {
  readonly technologies = signal<Technology[]>([]);
  readonly activeTechId = signal<string>('angular');
  readonly loading = signal(false);
  readonly sidebarOpen = signal(false);

  readonly activeTechnology = computed(() =>
    this.technologies().find(t => t.id === this.activeTechId()) ?? null
  );

  constructor(private http: HttpClient) {}

  async loadAll(): Promise<void> {
    this.loading.set(true);
    try {
      const index = await firstValueFrom(
        this.http.get<{ id: string }[]>('/assets/data/docs/index.json')
      );

      const all = await Promise.all(
        index.map(entry =>
          firstValueFrom(this.http.get<Technology>(`/assets/data/docs/${entry.id}.json`))
        )
      );

      this.technologies.set(all);

      if (all.length > 0 && !all.some(t => t.id === this.activeTechId())) {
        this.activeTechId.set(all[0].id);
      }
    } catch (err) {
      console.error('Error cargando documentación:', err);
    } finally {
      this.loading.set(false);
    }
  }

  setActive(id: string) {
    this.activeTechId.set(id);
    this.sidebarOpen.set(false);
  }

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }

  closeSidebar() {
    this.sidebarOpen.set(false);
  }
}
