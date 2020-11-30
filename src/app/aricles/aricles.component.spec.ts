import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriclesComponent } from './aricles.component';

describe('AriclesComponent', () => {
  let component: AriclesComponent;
  let fixture: ComponentFixture<AriclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AriclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
