import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circuit-bg',
  standalone: true,
  imports: [],
  templateUrl: './circuit-bg.html',
  styleUrls: ['./circuit-bg.scss']
})
export class CircuitBgComponent {
  /** Modo ambiente: trazos más gruesos/brillantes, sin fondo sólido ni viñeta. */
  @Input() ambient = false;
}
