import {CheckoutsListComponent} from '@app/views/dashboard/checkouts-list/checkouts-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('CheckoutsListComponent', () => {
  let component: CheckoutsListComponent;
  let fixture: ComponentFixture<CheckoutsListComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [],
      declarations: [CheckoutsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutsListComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
