import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div style>{{ value }}</div>
  `,
  styles: []
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
