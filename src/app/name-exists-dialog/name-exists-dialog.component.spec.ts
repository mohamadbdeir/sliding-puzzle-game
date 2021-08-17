import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameExistsDialogComponent } from './name-exists-dialog.component';

describe('NameExistsDialogComponent', () => {
  let component: NameExistsDialogComponent;
  let fixture: ComponentFixture<NameExistsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameExistsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameExistsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
