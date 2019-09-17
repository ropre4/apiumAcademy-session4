import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnpageComponent } from './btnpage.component';

describe('BtnpageComponent', () => {
  let component: BtnpageComponent;
  let fixture: ComponentFixture<BtnpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
