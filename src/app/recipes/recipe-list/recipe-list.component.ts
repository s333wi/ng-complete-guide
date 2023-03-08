import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'testestwebo',
      'https://imgs.search.brave.com/LK6oB-Nj6Gy9H7XTB90BuUeNxQpGyYB8skppkzAA6ao/rs:fit:1200:1040:1/g:ce/aHR0cHM6Ly8yLmJw/LmJsb2dzcG90LmNv/bS8tMWo4TDZFLWlS/eG8vV0FCb2FqSEdy/WkkvQUFBQUFBQUFG/c28vSmhXYnBOM08y/SG9vRDh3bFFEaGxs/Vmh6bzhWQXU0QXRn/Q0xjQi9zMTYwMC8y/MDE2MTAxMV8xMjA1/MjcuanBn')
  ];


}
