import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProductosComponent } from './componente-productos.component';

describe('ComponenteProductosComponent', () => {
  let component: ComponenteProductosComponent;
  let fixture: ComponentFixture<ComponenteProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteProductosComponent]
    });
    fixture = TestBed.createComponent(ComponenteProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
