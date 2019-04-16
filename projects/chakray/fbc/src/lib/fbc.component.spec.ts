import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbcComponent } from './fbc.component';

describe('FbcComponent', () => {
  let component: FbcComponent;
  let fixture: ComponentFixture<FbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
