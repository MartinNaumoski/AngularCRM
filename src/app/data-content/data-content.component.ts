import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataContentService } from '../data-content.service';
import { AdminServiceService } from '../admin-service.service';

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
  articles: any = [];
  searchData: any = [];
  tempFlag: boolean = false;
  baseUrl = "http://realestate-task.draft2017.com";
  constructor(private router: Router,
    private dataContentService: DataContentService,
    private adminServiceService: AdminServiceService) { }

  ngOnInit(): void {
    this.takeArticles();
  }
 
  takeArticles(){
    this.adminServiceService.getArticles().subscribe(data => {
      this.articles = data.Articles;
      console.log(this.articles);
    },error => {
      console.log(error)
    })
  }
  showDetailArticle(id:any){
    console.log(id)
    this.router.navigate(['detail-property/'+id])
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
