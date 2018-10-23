import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {BookrequestService} from '../service/bookrequest.service';
import {Location} from '@angular/common';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-bookrequests-create',
  templateUrl: './bookrequests-create.component.html',
  styleUrls: ['./bookrequests-create.component.css']
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
      'state': ['']
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
