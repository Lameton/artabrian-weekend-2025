import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgMain } from './mtg-main';

describe('MtgMain', () => {
  let component: MtgMain;
  let fixture: ComponentFixture<MtgMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtgMain],
    }).compileComponents();

    fixture = TestBed.createComponent(MtgMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
