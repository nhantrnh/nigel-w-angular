import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  template: `
    <div class="toggle-button" [class.isActive]="isActive" tabindex="0" (click)="toggle()">
      Toggle Me
    </div>
  `,
  styles: [`
    .toggle-button {
      padding: 10px 20px;
      border: 2px solid red;
      border-radius: 5px;
      cursor: pointer;
      background-color: red;
      text-align: center;
      transition: background-color 0.3s, border-color 0.3s;
    }

    .isActive {
      background-color: blue;
      border-color: blue;
      color: white;
    }
  `]
})
export class ToggleButtonComponent {
    @Input() isActive: boolean = false;

    @Output() isActiveChange = new EventEmitter<boolean>();

    toggle() {
        this.isActiveChange.emit(!this.isActive);
        console.log('toggle', this.isActive);
    }
}
