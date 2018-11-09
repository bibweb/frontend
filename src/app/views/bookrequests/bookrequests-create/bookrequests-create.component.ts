import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {BookRequestState} from '../model';
import {BookrequestService} from '../service';


@Component({
  selector: 'app-bookrequests-create',
  templateUrl: './bookrequests-create.component.html'
})
export class BookrequestsCreateComponent {
  createForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private bookRequestService: BookrequestService,
              private location: Location) {
    this.createForm = this.fb.group({
      'isbn': ['', Validators.required],
      'user': [''],
      'state': [BookRequestState.NEW]
    });
  }

  createBookRequest() {
    this.bookRequestService.createBookRequest(this.createForm.value).subscribe(
      () => this.router.navigate(['/bookrequests'])
    );
  }

  goBack() {
    this.location.back();
  }

}
