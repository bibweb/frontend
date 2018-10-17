import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BookrequestService} from '../service/bookrequest.service';
import {BookRequest} from '../model/bookRequest';
import {Location} from '@angular/common';

@Component({
  selector: 'app-bookrequests-create',
  templateUrl: './bookrequests-create.component.html',
  styleUrls: ['./bookrequests-create.component.css']
})
export class BookrequestsCreateComponent implements OnInit {


  constructor(private router: Router, private bookRequestService: BookrequestService, private location: Location) { }

  model: BookRequest;


  ngOnInit() {
    this.model = new BookRequest();
    this.model.user = '';
  }

  createBookRequest() {
    this.bookRequestService.createBookRequest(this.model)
      .subscribe(data => this.router.navigate(['bookrequests']));
  }

  goBack(): void {
    this.location.back();
  }

}
