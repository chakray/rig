import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FbcModule } from '@chakray/fbc';
import { SideMod } from '@mod/side';

import { AppRoot as Tag } from './app.root';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SideMod,
        FbcModule],
      declarations: [Tag],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Tag);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
