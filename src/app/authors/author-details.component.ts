import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Author, authors } from "../authors.model";
@Component({
    selector: 'author-details',
    template: `
    <div>
        {{author.firstName}}
       {{author.lastName}}
        <button style="margin-left: 10px;" (click)="select.emit(author)">Select</button>
    </div>
    `,
    standalone: true,
})
export class AuthorDetailsComponent {
    @Input() author!: Author;

    @Output() select = new EventEmitter<Author>();
}