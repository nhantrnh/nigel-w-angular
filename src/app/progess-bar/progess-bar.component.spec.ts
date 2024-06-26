import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgessBarComponent } from './progess-bar.component';

describe('ProgessBarComponent', () => {
  let component: ProgessBarComponent;
  let fixture: ComponentFixture<ProgessBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgessBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgessBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
