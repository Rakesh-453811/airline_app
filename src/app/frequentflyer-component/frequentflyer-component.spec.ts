import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentflyerComponent } from './frequentflyer-component';

describe('FrequentflyerComponent', () => {
  let component: FrequentflyerComponent;
  let fixture: ComponentFixture<FrequentflyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequentflyerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequentflyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
