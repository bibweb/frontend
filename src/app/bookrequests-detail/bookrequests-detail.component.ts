import {Component, Input, OnInit} from '@angular/core';
import {BookRequest, BookRequestStateStrings} from '../model/bookRequest';
import {ActivatedRoute, Router} from '@angular/router';
import {BookrequestService} from '../service/bookrequest.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-bookrequests-detail',
  templateUrl: './bookrequests-detail.component.html',
  styleUrls: ['./bookrequests-detail.component.css']
})
export class BookrequestsDetailComponent implements OnInit {
  @Input() bookRequest: BookRequest;
  bookRequestStateStrings;


  constructor(private bookRequestService: BookrequestService, private route: ActivatedRoute, private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.getBookRequestDetail();
    this.bookRequestStateStrings = BookRequestStateStrings;
  }

  getBookRequestDetail(): void {
    const bookRequestId: number = +this.route.snapshot.paramMap.get('id');
    this.bookRequestService.getBookRequest(bookRequestId).subscribe(bookRequest => this.bookRequest = bookRequest);
  }

  goBack(): void {
    this.location.back();
  }

  acceptBookRequest(): void {
    this.bookRequestService.acceptBookRequest(this.bookRequest).subscribe(_ => this.router.navigate(['/bookrequests']));
  }

  declineBookRequest() {
    this.bookRequestService.declineBookRequest(this.bookRequest).subscribe(_ => this.router.navigate(['/bookrequests']));
  }
}
