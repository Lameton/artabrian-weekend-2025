import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwuMain } from './swu-main';

describe('SwuMain', () => {
  let component: SwuMain;
  let fixture: ComponentFixture<SwuMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwuMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwuMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
