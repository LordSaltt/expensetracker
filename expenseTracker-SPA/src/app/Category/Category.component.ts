import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Category',
  templateUrl: './Category.component.html',
  styleUrls: ['./Category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any;
  displayedColumns: string[] = ['id', 'categoryName', 'description'];
  dataSource: any;

  constructor(private http: HttpClient) { }
 


  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get('http://localhost:5000/api/categories').subscribe(response => {
      this.categories = response;
      this.dataSource = response;
      
    }, error => {
      console.log(error);
    });
  }

}
