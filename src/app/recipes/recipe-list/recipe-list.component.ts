import { Component, OnInit } from '@angular/core';

import {Recipe } from '../recipe.model'; 
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is Simply a test', 'https://4tbarallnaturalbeef.com/wp-content/uploads/2016/11/natural-beef-ribeye-steak.jpg')
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
