import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {OverviewComponent} from '@app/views/dashboard/overview/overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthService, Checkout, CheckoutService} from '@app/core';
import {Directive, EventEmitter, Input, Output} from '@angular/core';
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

@Directive({
  selector: 'app-reservations-list'
})
class MockReservationsListComponent {
  @Input()
  user: number;
}

describe('Dashboard overview', () => {

  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  let authService;
  let checkoutService;
  let activatedRoute;

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
        ReactiveFormsModule
      ],
      providers: [
        {provide: AuthService, useValue: authService},
        {provide: CheckoutService, useValue: checkoutService},
        {provide: ActivatedRoute, useValue: activatedRoute}
      ],
      declarations: [OverviewComponent,
        MockCheckoutsListComponent,
        MockCreateCheckoutComponent,
        MockReservationsListComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(OverviewComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should load checkouts and put them into checkouts list', async () => {
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
