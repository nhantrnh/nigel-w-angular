import { Component, Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-home',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './my-home.component.html',
  styleUrl: './my-home.component.css'
})
export class MyHomeComponent {
  me = {
    myName: 'Nigel',
    myAge: 20,
  };
}
