import { Component } from '@angular/core';
import { ServicioProductosService } from 'src/app/services/servicio-productos.service';

@Component({
  selector: 'app-componente-productos',
  templateUrl: './componente-productos.component.html',
  styleUrls: ['./componente-productos.component.css']
})
export class ComponenteProductosComponent {
  productos: any[] = [];
  constructor(private servicioProductos: ServicioProductosService) {
    
  }

  ngOnInit(){
    this.productos = this.servicioProductos.getProductos();
  }

   
}
