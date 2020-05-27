import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserListComponent } from './teaser-list.component';

describe('TeaserListComponent', () => {
  let component: TeaserListComponent;
  let fixture: ComponentFixture<TeaserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
