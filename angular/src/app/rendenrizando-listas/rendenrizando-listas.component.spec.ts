import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendenrizandoListasComponent } from './rendenrizando-listas.component';

describe('RendenrizandoListasComponent', () => {
  let component: RendenrizandoListasComponent;
  let fixture: ComponentFixture<RendenrizandoListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendenrizandoListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendenrizandoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
