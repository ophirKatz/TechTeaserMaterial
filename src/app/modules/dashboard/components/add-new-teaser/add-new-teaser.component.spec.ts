import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTeaserComponent } from './add-new-teaser.component';

describe('AddNewTeaserComponent', () => {
  let component: AddNewTeaserComponent;
  let fixture: ComponentFixture<AddNewTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
