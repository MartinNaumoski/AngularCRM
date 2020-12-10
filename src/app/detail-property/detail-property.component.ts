import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminServiceService } from '../admin-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-detail-property',
  templateUrl: './detail-property.component.html',
  styleUrls: ['./detail-property.component.css']
})
export class DetailPropertyComponent implements OnInit {
  private routeSub!: Subscription;
  id = 0;
  article:any = [];
  relatedArticles:any = [];
  pictureUrl:any = '';
  constructor(private adminService: AdminServiceService,private route: ActivatedRoute,private router: Router) { }
  ngOnInit(): void {
    this.takeArticleId();
    this.takeRelatedArticles();
  }
  takeRelatedArticles(){
    this.adminService.getArticle(this.id).subscribe(data => {
      this.relatedArticles = data["Related-Article"];
      console.log(this.relatedArticles)
    }, error => {
    })
  }
  showDetailArticle(id: any) {
    this.router.navigate(['detail-property/' + id]);
    this.takeArticleId();
    this.takeRelatedArticles();
  }
  takeArticleId(){
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    }); 
    this.adminService.getArticle(this.id).subscribe(data => {
      this.article = data.Article;
      // 'realestate-task.draft2017.com/storage//photos/' + 
      this.pictureUrl =this.article.photo[0].photo;
      console.log(this.pictureUrl)
    }, error => {
    })
  }
}
