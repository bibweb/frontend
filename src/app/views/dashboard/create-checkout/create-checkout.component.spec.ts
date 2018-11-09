import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CreateCheckoutComponent} from '@app/views/dashboard/create-checkout/create-checkout.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookService} from '@app/views/books/services';
import {BookIdValidator} from '@app/views/dashboard/create-checkout/validators/BookIdValidator';
import {of} from 'rxjs';


describe('Create checkout component', () => {

  let component: CreateCheckoutComponent;
  let fixture: ComponentFixture<CreateCheckoutComponent>;

  let bookService;
  let bookIdValidator;

  beforeEach(async(() => {
    bookService = jasmine.createSpyObj('BookService', ['getBookIds']);
    bookIdValidator = jasmine.createSpyObj('BookIdValidator', ['checkBookIdIsValid'])

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {provide: BookService, useValue: bookService},
        {provide: BookIdValidator, useValue: bookIdValidator}
      ],
      declarations: [CreateCheckoutComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(CreateCheckoutComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should not have a valid form, if entered book id is not valid', () => {
    bookService.getBookIds.and.returnValue(of([]))
    bookIdValidator.checkBookIdIsValid.and.returnValue({'bookIdDoesNotExist': 'Mock'});

    component.checkoutForm.controls['bookId'].setValue('45');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.checkoutForm.valid).toBe(false);
    });
  });

  it('should have a valid form, if entered book id is valid', () => {
    bookService.getBookIds.and.returnValue(of([]))
    bookIdValidator.checkBookIdIsValid.and.returnValue(null);

    component.checkoutForm.controls['bookId'].setValue('45');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.checkoutForm.valid).toBe(true);
    });
  });


  it('should emit an event, if the form is submitted', () => {
    bookService.getBookIds.and.returnValue(of([]))
    bookIdValidator.checkBookIdIsValid.and.returnValue(null);

    component.checkoutForm.controls['bookId'].setValue('45');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      component.checkoutForm.controls[""]
    });

  });

});
