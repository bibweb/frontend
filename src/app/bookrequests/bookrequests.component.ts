import {Component, OnInit} from '@angular/core';
import {BookrequestService} from '../service/bookrequest.service';
import {BookRequest, BookRequestStateStrings} from '../model/bookRequest';

@Component({
  selector: 'app-bookrequests',
  templateUrl: './bookrequests.component.html',
  styleUrls: ['./bookrequests.component.css']
})
export class BookrequestsComponent implements OnInit {
  bookRequests: BookRequest[];
  bookRequestStateStrings;

  constructor(private bookRequestService: BookrequestService) { }

  ngOnInit() {
    this.getBookRequests();
    this.bookRequestStateStrings = BookRequestStateStrings;
  }

  getBookRequests(): void {
    this.bookRequestService.getBookRequests()
      .subscribe(bookRequests => this.bookRequests = bookRequests);
  }

}