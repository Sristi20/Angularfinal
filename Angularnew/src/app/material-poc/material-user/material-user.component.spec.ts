import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUserComponent } from './material-user.component';

describe('MaterialUserComponent', () => {
  let component: MaterialUserComponent;
  let fixture: ComponentFixture<MaterialUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
