import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from './../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  heroes : Heroe[] = [];
  subtitulo: any;
  constructor(private _heroesService: HeroesService,  private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      this.heroes= this._heroesService.buscarHeroes( params['nombre'] );
      this.subtitulo = this.heroes.length.toString();
});
  }

  ngOnInit() {
  }


}
