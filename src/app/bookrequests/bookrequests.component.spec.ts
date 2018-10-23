import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {BookrequestService} from '../service/bookrequest.service';
import {BookrequestsComponent} from './bookrequests.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BookRequest, BookRequestState} from '../model/bookRequest';
import {of} from 'rxjs';

describe('BookRequest', () => {
  let component: BookrequestsComponent;
  let fixture: ComponentFixture<BookrequestsComponent>;
  let spy;

  beforeEach(async(() => {
    spy = jasmine.createSpyObj('BookrequestService', ['getBookRequests']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: BookrequestService, useValue: spy}
      ],
      declarations: [BookrequestsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookrequestsComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should get the BookRequests onInit()', async(() => {
    spy.getBookRequests.and.returnValue(of(<BookRequest[]>[
      new BookRequest(1, '1321568351', 'user', BookRequestState.NEW),
      new BookRequest(2, '4861311385', 'user', BookRequestState.ACCEPTED)
    ]));
    component.ngOnInit();
    expect(component.bookRequests.length).toBe(2);
  }));

  it('should display the retrieved BookRequests', async(() => {
    spy.getBookRequests.and.returnValue(of(<BookRequest[]>[
      new BookRequest(1, '1321568351', 'user', BookRequestState.NEW),
      new BookRequest(2, '4861311385', 'user', BookRequestState.ACCEPTED)
    ]));
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tbody > tr');
    expect(tableRows.length).toBe(2);
  }));

});
