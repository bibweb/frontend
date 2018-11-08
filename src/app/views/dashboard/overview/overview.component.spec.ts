import {CheckoutsListComponent} from '@app/views/dashboard/checkouts-list/checkouts-list.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {OverviewComponent} from '@app/views/dashboard/overview/overview.component';
import {CreateCheckoutComponent} from '@app/views/dashboard/create-checkout/create-checkout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService, CheckoutService} from '@app/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BookIdValidator} from '@app/views/dashboard/create-checkout/validators/BookIdValidator';
import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {Checkout} from '@app/views/dashboard/model';
import {of} from 'rxjs';

@Directive({
  selector: 'app-checkouts-list'
})
class MockCheckoutsListComponent {
  @Input()
  checkouts: Checkout[];
}

@Directive({
  selector: 'app-create-checkout'
})
class MockCreateCheckoutComponent {
  @Output()
  create = new EventEmitter<any>();
}

describe("Dashboard overview", () => {

  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  let authService;
  let checkoutService;
  let activatedRoute;
  let bookIdValidator;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['hasRole', 'getUserId']);
    checkoutService = jasmine.createSpyObj('CheckoutService', ['getCheckoutsForUser'])
    activatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get')
        }
      }
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: AuthService, useValue: authService},
        {provide: CheckoutService, useValue: checkoutService},
        {provide: ActivatedRoute, useValue: activatedRoute}
      ],
      declarations: [OverviewComponent,
        MockCheckoutsListComponent,
        MockCreateCheckoutComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(OverviewComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should load checkouts and put them into checkouts list', async() => {
    authService.hasRole.and.returnValue(false);
    authService.getUserId.and.returnValue(1);
    checkoutService.getCheckoutsForUser.and.returnValue(of(
      [new Checkout(), new Checkout()]
    ));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.checkouts.length).toBe(2);
    });
  });
});
