import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Author } from "../authors.model";

@Component({
  selector: 'author-details',
  template: `
    <div>
      {{author.firstName}} {{author.lastName}}
      <button style="margin-left: 10px;" (click)="select.emit(author)">Select</button>
      <button style="margin-left: 10px;" (click)="delete.emit(author)">Delete</button>
    </div>
  `,
  standalone: true,
})
export class AuthorDetailsComponent {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<Author>();
}
