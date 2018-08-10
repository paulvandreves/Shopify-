import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'; 

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @INPUT allow us to bind component properties from outside 
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
