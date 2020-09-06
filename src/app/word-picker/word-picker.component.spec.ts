import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPickerComponent } from './word-picker.component';

describe('WordPickerComponent', () => {
  let component: WordPickerComponent;
  let fixture: ComponentFixture<WordPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
