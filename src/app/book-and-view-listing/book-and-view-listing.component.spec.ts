import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAndViewListingComponent } from './book-and-view-listing.component';

describe('BookAndViewListingComponent', () => {
  let component: BookAndViewListingComponent;
  let fixture: ComponentFixture<BookAndViewListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAndViewListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAndViewListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
