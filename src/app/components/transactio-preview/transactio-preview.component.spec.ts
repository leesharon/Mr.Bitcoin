import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioPreviewComponent } from './transactio-preview.component';

describe('TransactioPreviewComponent', () => {
  let component: TransactioPreviewComponent;
  let fixture: ComponentFixture<TransactioPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactioPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactioPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
