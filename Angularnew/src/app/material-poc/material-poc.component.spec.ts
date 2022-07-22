import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPOCComponent } from './material-poc.component';

describe('MaterialPOCComponent', () => {
  let component: MaterialPOCComponent;
  let fixture: ComponentFixture<MaterialPOCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPOCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
