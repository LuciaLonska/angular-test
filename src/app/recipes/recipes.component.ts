import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  baseUrl: string = 'https://jsonplaceholder.typicode.com'
  recipes: Recipe[] = [];
  httpClient: HttpClient = null;

  constructor(httpClie: HttpClient) {
    this.httpClient = httpClie
    this.get_products()
  }

  delete_recipe(recipe: Recipe){
    this.httpClient
    .delete(this.baseUrl + '/posts/' + recipe.id)
    .subscribe((response: any) => {
      this.recipes = this.recipes.filter(r => r != recipe)
    })
  }

  get_products(){
    this.httpClient
    .get(this.baseUrl + '/posts')
    .subscribe((jsondata: any[])=>{
      const post: Recipe[] =
        jsondata
        .slice(0,10)
        .map(element => {return new Recipe(element.userId, element.id, element.title, element.body);})

      this.recipes = post;
    });
  }

  ngOnInit() {
  }

}
