import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'; 


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// import  the ingredients just like recipes 
@Output() ingredientAdded = new EventEmitter<{name:string, amount:number}>();  //name:string, amount:number
// This event emiter will just pass a string. We need to pass a string and
// a number to add it to the Ingredient array 
// Where is the ingredient array held? 

@ViewChild('nameInput') nameInputRef: ElementRef;  // corosponds to the #nameInput attribute in the html part of this component 
@ViewChild('amountInput') amountInputRef: ElementRef; 
  constructor() { }

  ngOnInit() {
  }

  onAddItem(nameInput: HTMLInputElement) {
    // two variables were created to  be passed into a new instance of the Ingredient object. 
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value; 
    const newIngredient = new Ingredient(ingName, ingAmount); 
    this.ingredientAdded.emit(newIngredient); 
    console.log('on addItem fired!'); 
  }

 

}
