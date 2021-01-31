import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe kaoskas oasoaksoaks',
      'This is a recipe test kakajsk udjejd dllsl slslsl',
      'https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg'),
    new Recipe('A test recipe kaoskas oasoaksoaks',
      'This is a recipe test kakajsk udjejd dllsl slslsl',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/12/healthy-breakfast-pizzas.jpg?resize=1024%2C750&ssl=1')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
