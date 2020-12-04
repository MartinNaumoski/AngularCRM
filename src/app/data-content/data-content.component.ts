import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataContentService } from '../data-content.service';

@Component({
  selector: 'app-data-content',
  templateUrl: './data-content.component.html',
  styleUrls: ['./data-content.component.css']
})
export class DataContentComponent implements OnInit {

  searchQuery: any = {
    price_form: '',
    price_to: '',
    offer_types: '',
    city: '',
    type: ''
  };
  searchData: any = [];
  tempFlag: boolean = false;
  baseUrl = "http://realestate-task.draft2017.com";
  constructor(private router: Router,
    private dataContentService: DataContentService) { }

  ngOnInit(): void {
  }
 

  makeSearchQuery() {
    this.dataContentService.search(this.searchQuery).subscribe(data => {
      this.searchData = data.Articles.data;
      this.searchData = ["test"]
      this.searchData ? this.tempFlag = true : false;
    }, error => {
      console.log(error);
    });
  }

}
