import { Component } from "@angular/core";
import { AuthorDetailsComponent } from "./author-details.component";
import { authors, Author } from "../authors.model";
import {CommonModule} from '@angular/common';
@Component({
    selector: 'author-list',
    template: `<author-details *ngFor="let item of authors" [author]="item!" (select)="onSelected($event)"></author-details>
    <br>
    <div>
    current selected author: {{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
    </div>
    `,
    standalone: true,
    imports: [AuthorDetailsComponent],
})
export class AuthorListComponent {
    authors = authors;
    currentAuthor = authors[0];

    onSelected(selectedAuthor: Author) {
        this.currentAuthor = selectedAuthor
    }
}