import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaParametroComponent } from './pagina-parametro.component';

describe('PaginaParametroComponent', () => {
  let component: PaginaParametroComponent;
  let fixture: ComponentFixture<PaginaParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaParametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
