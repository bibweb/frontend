import {Component, OnInit} from '@angular/core';
import {BookRequest, BookRequestState, BookRequestStateStrings} from '../model';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {BookrequestService} from '../service';

@Component({
  selector: 'app-bookrequests-detail',
  templateUrl: './bookrequests-detail.component.html'
})
export class BookrequestsDetailComponent implements OnInit {
  bookRequest: BookRequest;
  bookRequestStateStrings = BookRequestStateStrings;
  stateNew: BookRequestState = BookRequestState.NEW;


  constructor(private bookRequestService: BookrequestService, private route: ActivatedRoute, private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.getBookRequestDetail();
  }

  getBookRequestDetail(): void {
    const bookRequestId: number = +this.route.snapshot.paramMap.get('id');
    this.bookRequestService.getBookRequest(bookRequestId).subscribe(
      bookRequest => {
        this.bookRequest = bookRequest;
      },
      err => {
        console.log(err);
        if (err.status === 403) {
          this.router.navigate(['/forbidden']);
        } else {
          this.router.navigate(['/bookrequests']);
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  acceptBookRequest(): void {
    this.bookRequestService.acceptBookRequest(this.bookRequest).subscribe(() => this.router.navigate(['/bookrequests']));
  }

  declineBookRequest() {
    this.bookRequestService.declineBookRequest(this.bookRequest).subscribe(() => this.router.navigate(['/bookrequests']));
  }
}
