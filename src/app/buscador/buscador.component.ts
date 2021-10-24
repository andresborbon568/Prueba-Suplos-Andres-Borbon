import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImagenesInfoService } from 'src/services/imagenes-info.service';
import {itemImagen} from 'src/models/itemImagen';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public data: itemImagen[];
  public inputBuscar: string;
  public cardActiva: number;

  constructor(private infoService: ImagenesInfoService) {
    this.data = [];
    this.inputBuscar = '';
    this.cardActiva = 999999999;
   }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.infoService.getContentImages().subscribe(data => {
      this.data = data.hits;
      console.log('Los datos son: ', this.data);
    }, error => {
      console.log('Error al cargar contenido.');
    });
  }

  filtrarInfo() {
    this.infoService.getFilterContentImages(this.inputBuscar).subscribe(data => {
      this.data = data.hits;
      console.log('Los datos son: ', this.data);
    }, error => {
      console.log('Error al cargar contenido del filtro.');
    });
  }

  filtrarPorCategoria(value: HTMLSelectElement) {
    this.infoService.getFilterByCategoryContentImages(value.value).subscribe(data => {
      this.data = data.hits;
      console.log('Los datos son: ', this.data);
    }, error => {
      console.log('Error al cargar contenido.');
    });
  }

  expandirImagen(imagenId: number) {
    for (let counter = 0; counter < this.data.length; counter++) {
      let cardAntigua = document.getElementById(String(counter))?.setAttribute('class', 'cardImagen col-sm-5 col-lg-3 p-2 m-2 border border-dark');
    }
    let card = document.getElementById(String(imagenId))?.setAttribute('class', 'cardImagen col-sm-10 col-lg-10 p-2 m-2 border border-dark');
    this.cardActiva = imagenId;
    //let cardAntigua = document.getElementById(String(this.idAntiguo))?.setAttribute('class', 'cardImagen col-sm-5 col-lg-3 p-2 m-2 border border-dark');
    //this.idAntiguo = imagenId;
  }

}
