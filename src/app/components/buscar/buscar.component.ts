import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from './../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  heroes : Heroe[] = [];
  subtitulo: any;
  termino: string;
  constructor(private _heroesService: HeroesService,  private activatedRoute:ActivatedRoute,  private router:Router) {

 }
 verHeroe(index:number){
  this.router.navigate(['/heroe', index ]);

}
  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes= this._heroesService.buscarHeroes( params['nombre'] );
      this.subtitulo = this.heroes.length.toString();
      this.termino=params['nombre'];
});
  }

}
