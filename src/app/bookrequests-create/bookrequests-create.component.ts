import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BookrequestService} from '../service/bookrequest.service';
import {BookRequest, BookRequestState} from '../model/bookRequest';
import {Location} from '@angular/common';

import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '@app/service/auth.service';


@Component({
  selector: 'app-bookrequests-create',
  templateUrl: './bookrequests-create.component.html',
  styleUrls: ['./bookrequests-create.component.css']
})
export class BookrequestsCreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private bookRequestService: BookrequestService,
              private location: Location,
              private authService: AuthService) {
    this.createForm = this.fb.group({
      'isbn': ['', Validators.required],
      'user': ['', Validators.required],
      'state': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createForm.patchValue({'user': this.authService.getUserName(), 'state': BookRequestState.NEW});
  }

  createBookRequest() {
    this.bookRequestService.createBookRequest(this.createForm.value).subscribe(
      data => this.router.navigate(['/bookrequests'])
    );
  }

  goBack() {
    this.location.back();
  }

}
