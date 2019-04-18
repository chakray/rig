import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmMarkedTag } from './marked.tag';

describe('MarkedComponent', () => {
  let component: CmMarkedTag;
  let fixture: ComponentFixture<CmMarkedTag>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmMarkedTag ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmMarkedTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
