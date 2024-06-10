import { Component } from "@angular/core";
import { AuthorDetailsComponent } from "./author-details.component";
import { authors, Author } from "../authors.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'author-list',
  template: `
    <author-details 
      *ngFor="let item of authors" 
      [author]="item" 
      (select)="onSelected($event)" 
      (delete)="onDelete($event)">
    </author-details>
    <br>
    <div>
      Current selected author: {{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
    </div>
  `,
  standalone: true,
  imports: [AuthorDetailsComponent, CommonModule],
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor: Author | null = authors[0];

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDelete(author: Author) {
    this.authors = this.authors.filter(a => a.id !== author.id);
    if (this.currentAuthor && this.currentAuthor.id === author.id) {
      this.currentAuthor = this.authors.length ? this.authors[0] : null;
    }
  }
}
