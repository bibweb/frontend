import {Component, OnInit} from '@angular/core';
import {BookrequestService} from '../service/bookrequest.service';
import {BookRequest} from '../model/bookRequest';

@Component({
  selector: 'app-bookrequests',
  templateUrl: './bookrequests.component.html',
  styleUrls: ['./bookrequests.component.css']
})
export class BookrequestsComponent implements OnInit {
  bookRequests: BookRequest[];

  constructor(private bookRequestService: BookrequestService) { }

  ngOnInit() {
    this.getBookRequests();
  }

  getBookRequests(): void {
    this.bookRequestService.getBookRequests()
      .subscribe(bookRequests => this.bookRequests = bookRequests);
  }

}
