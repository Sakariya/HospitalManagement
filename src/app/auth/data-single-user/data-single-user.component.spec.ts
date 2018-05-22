import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSingleUserComponent } from './data-single-user.component';

describe('DataSingleUserComponent', () => {
  let component: DataSingleUserComponent;
  let fixture: ComponentFixture<DataSingleUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSingleUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
