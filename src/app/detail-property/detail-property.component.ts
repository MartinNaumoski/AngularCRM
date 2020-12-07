import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminServiceService } from '../admin-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-detail-property',
  templateUrl: './detail-property.component.html',
  styleUrls: ['./detail-property.component.css']
})
export class DetailPropertyComponent implements OnInit {
  private routeSub!: Subscription;
  id = 0;
  article:any = [];
  constructor(private adminService: AdminServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.takeArticleId();
  }
  takeArticleId(){
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    }); 
    this.adminService.getArticle(this.id).subscribe(data => {
      this.article = data.Article;
      console.log(this.article);
    }, error => {
    })
  }
}
