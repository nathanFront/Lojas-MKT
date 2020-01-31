import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../service/home-service.service';
import {Home} from '../entidades/homeEntity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProduto: Home;
  lista: Home[]

  constructor(private homeService: HomeServiceService) { }

  ngOnInit() {
      this.listProduto = new Home();
    this.listarProdutos();
  }
  
  
  listarProdutos(){
    this.homeService.buscarTodosProdutos()
    .subscribe(
      todosProdutos => this.lista = todosProdutos[0],
      error => console.log(error));    
      
    }
}
