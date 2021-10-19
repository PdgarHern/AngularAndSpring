import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto';
import { ProductosServiceService } from 'src/app/shared/services/productos-service.service';

@Component({
  selector: 'app-personal-zone',
  templateUrl: './personal-zone.component.html',
  styleUrls: ['./personal-zone.component.scss']
})
export class PersonalZoneComponent implements OnInit {

  public search: any = '';

  constructor(private productoService: ProductosServiceService, private router: Router, route: ActivatedRoute) {
    
    

  }

  ngOnInit(): void {
    console.log(window.location.pathname.split("/").pop()?.replace("%20", " ").replace("%20", " ").replace("%20", " "));
    this.search = window.location.pathname.split("/").pop()?.replace("%20", " ").replace("%20", " ").replace("%20", " ");
  }

}
