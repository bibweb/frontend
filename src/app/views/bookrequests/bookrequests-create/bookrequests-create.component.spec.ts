import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {BookrequestsCreateComponent} from './bookrequests-create.component';
import {BookrequestService} from '../service';
import {of} from 'rxjs';
import {BookRequest} from '../model';
import {Router} from '@angular/router';

describe('BookRequests-create', () => {
  let fixture: ComponentFixture<BookrequestsCreateComponent>;
  let component: BookrequestsCreateComponent;
  let service;
  let router;

  beforeEach(async(() => {
    service = jasmine.createSpyObj('BookrequestService', ['createBookRequest']);
    router = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        FormBuilder,
        Location,
        {provide: BookrequestService, useValue: service},
        {provide: Router, useValue: router}
      ],
      declarations: [
        BookrequestsCreateComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookrequestsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('empty form should not be valid', () => {
    expect(component.createForm.valid).toBeFalsy();
  });

  it('form with an isbn should be valid', () => {
    component.createForm.patchValue({'isbn': '1234354383'});
    fixture.detectChanges();
    expect(component.createForm.valid).toBeTruthy();
  });

  it('after submitting one should be redirected to /bookrequests', () => {
    service.createBookRequest.and.returnValue(of(new BookRequest()));
    const submitButton = fixture.nativeElement.querySelector('button');

    component.createForm.patchValue({'isbn': '1234354383'});
    fixture.detectChanges();
    submitButton.click();

    expect(router.navigate).toHaveBeenCalledWith(['/bookrequests']);
  });
});
