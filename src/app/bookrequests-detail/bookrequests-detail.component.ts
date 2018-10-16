import {Component, Input, OnInit} from '@angular/core';
import {BookRequest} from '../model/bookRequest';
import {ActivatedRoute} from '@angular/router';
import {BookrequestService} from '../service/bookrequest.service';

@Component({
  selector: 'app-bookrequests-detail',
  templateUrl: './bookrequests-detail.component.html',
  styleUrls: ['./bookrequests-detail.component.css']
})
export class BookrequestsDetailComponent implements OnInit {
  @Input() bookRequest: BookRequest;


  constructor(private bookRequestService: BookrequestService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBookRequestDetail();
  }

  getBookRequestDetail(): void {
    const bookRequestId: number = +this.route.snapshot.paramMap.get('id');
    this.bookRequestService.getBookRequest(bookRequestId).subscribe(bookRequest => this.bookRequest = bookRequest);

  }

}
