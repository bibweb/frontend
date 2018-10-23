import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenPageAccessComponent } from './forbidden-page-access.component';

describe('ForbiddenPageAccessComponent', () => {
  let component: ForbiddenPageAccessComponent;
  let fixture: ComponentFixture<ForbiddenPageAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbiddenPageAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenPageAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
