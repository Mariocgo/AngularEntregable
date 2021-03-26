import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmarvelComponent } from './listmarvel.component';

describe('ListmarvelComponent', () => {
  let component: ListmarvelComponent;
  let fixture: ComponentFixture<ListmarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmarvelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
