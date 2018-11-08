import {Component} from '@angular/core';
import {BookIdValidator} from '@app/views/dashboard/create-checkout/validators/BookIdValidator';
import {BookService} from '@app/views/books/services';
import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CheckoutService} from '@app/core';
import {of} from 'rxjs';

class MockBookService extends BookService {
  constructor() {
    super(null);
  }

  bookIds: number[] = [3, 53, 4, 62, 23];

  getBookIds() {
    return of(this.bookIds);
  }
}

describe('BookIdValidator', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      declarations: [TestComponent],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should return false, if number of input not in book ID list', () => {
    component.checkoutForm.controls['field'].setValue("42");
    fixture.detectChanges();
    expect(component.checkoutForm.valid).toBe(false);
  });

  it('should return true, if number of input in book ID list', () => {
    component.checkoutForm.controls['field'].setValue("62");
    fixture.detectChanges();
    expect(component.checkoutForm.valid).toBe(true);
  });

});

@Component({
  template: '<form [formGroup]="checkoutForm">' +
    '<input type="text" formControlName="field" id="field" />' +
    '</form>'
})
class TestComponent {
  private validator: BookIdValidator;
  public checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validator = new BookIdValidator(new MockBookService());
    this.checkoutForm = this.fb.group({
      'field': ['', this.validator.checkBookIdIsValid.bind(this.validator)]
    });
  }
}
