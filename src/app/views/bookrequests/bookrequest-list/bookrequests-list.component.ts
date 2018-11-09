import {Component, OnInit} from '@angular/core';
import {BookRequest, BookRequestStateStrings} from '../model';
import {BookrequestService} from '../service';

@Component({
  selector: 'app-bookrequests',
  templateUrl: './bookrequests-list.component.html'
})
export class BookrequestsListComponent implements OnInit {
  bookRequests: BookRequest[];
  bookRequestStateStrings;

  constructor(private bookRequestService: BookrequestService) {
    this.bookRequestStateStrings = BookRequestStateStrings;
    this.bookRequests = [];
  }

  ngOnInit() {
    this.getBookRequests();
  }

  getBookRequests(): void {
    this.bookRequestService.getBookRequests()
      .subscribe(bookRequests => {
          this.bookRequests = bookRequests;
        },
        err => console.log(err));
  }

}
