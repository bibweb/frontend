import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BookrequestService} from '../service/bookrequest.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookRequest} from '../model/bookRequest';

@Component({
  selector: 'app-bookrequests-create',
  templateUrl: './bookrequests-create.component.html',
  styleUrls: ['./bookrequests-create.component.css']
})
export class BookrequestsCreateComponent implements OnInit {


  constructor(private router: Router, private bookRequestService: BookrequestService) { }

  model: BookRequest;


  ngOnInit() {
    this.model = new BookRequest();
  }

  createBookRequest() {
    this.bookRequestService.createBookRequest(this.model)
      .subscribe(data => this.router.navigate(['bookrequests']));
  }
}
