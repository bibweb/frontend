import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BookrequestsDetailComponent} from '@app/bookrequests-detail/bookrequests-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BookrequestService} from '@app/service/bookrequest.service';
import {HasRoleDirective} from '@app/directive/has-role.directive';
import {ActivatedRoute, Router} from '@angular/router';
import {BookRequest} from '@app/model/bookRequest';
import {of} from 'rxjs';
import {AuthService} from '@app/service/auth.service';

describe('BookRequestDetail', () => {
  let fixture: ComponentFixture<BookrequestsDetailComponent>;
  let component: BookrequestsDetailComponent;
  let activatedRoute;
  let router;
  let service;
  let authService;

  beforeEach(async(() => {
    service = jasmine.createSpyObj('BookrequestService',
      ['getBookRequest', 'acceptBookRequest', 'declineBookRequest']);

    activatedRoute = {
      snapshot: {
        paramMap: {
          get: jasmine.createSpy('get')
        }
      }
    };

    router = {
      navigate: jasmine.createSpy('navigate')
    };

    authService = {
      hasRole: jasmine.createSpy('hasRole')
    };

    TestBed.configureTestingModule({
      declarations: [BookrequestsDetailComponent, HasRoleDirective],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {provide: BookrequestService, useValue: service},
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: Router, useValue: router},
        {provide: AuthService, useValue: authService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookrequestsDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display information of the requested BookRequest', async(() => {
    const bookRequest = <BookRequest> {id: 1, isbn: '1031515153', user: 'testuser', state: 0};
    activatedRoute.snapshot.paramMap.get.and.returnValue(1);
    service.getBookRequest.and.returnValue(of(bookRequest));
    authService.hasRole.and.returnValue(false);
    fixture.detectChanges();

    const idField = fixture.nativeElement.querySelectorAll('label');

    expect(idField[1].innerText).toBe(bookRequest.id.toString());
    expect(idField[3].innerText).toBe(bookRequest.isbn);
    expect(idField[5].innerText).toBe(bookRequest.user);
    expect(idField[7].innerText).toBe('New');
  }));

  it('should display accept & decline button when the user is ADMIN', async(() => {
    const bookRequest = <BookRequest> {id: 1, isbn: '1031515153', user: 'testuser', state: 0};
    activatedRoute.snapshot.paramMap.get.and.returnValue(1);
    service.getBookRequest.and.returnValue(of(bookRequest));
    authService.hasRole.and.returnValue(true);
    fixture.detectChanges();


    const adminButtons = fixture.nativeElement.querySelectorAll('button');

    expect(adminButtons.length).toBe(3);
    expect(adminButtons[0].innerText).toBe('Accept BookRequest');
    expect(adminButtons[1].innerText).toBe('Decline BookRequest');
  }));

});
