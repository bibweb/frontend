import {Component, OnInit} from '@angular/core';
import {BookRequest, BookRequestState, BookRequestStateStrings} from '../model/bookRequest';
import {ActivatedRoute, Router} from '@angular/router';
import {BookrequestService} from '../service/bookrequest.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-bookrequests-detail',
  templateUrl: './bookrequests-detail.component.html',
  styleUrls: ['./bookrequests-detail.component.css']
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
