import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { AdminServiceService } from '../../app/admin-service.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  articleData: any = [];
  private routeSub!: Subscription;
  id = 0;
  pictureUrl: any = undefined;

  constructor(private route: ActivatedRoute, private adminService: AdminServiceService) {

   }

  ngOnInit(): void {
    this.takeId();
    this.pictureUrl != undefined ? '' : this.pictureUrl = "http://realestate-task.draft2017.com/storage//photos/1607515768-hero_how_it_works_meal_plans.jpg";
    console.log(this.pictureUrl)
  }
  ngOnChanges() {
    this.takeId();
    this.pictureUrl != undefined ? '' : this.pictureUrl = "http://realestate-task.draft2017.com/storage//photos/1607515768-hero_how_it_works_meal_plans.jpg";
  }
  takeId() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.id != undefined ? this.takeArticle() : '';
    });
    this.id != undefined ? this.takeArticle() : '';
  }
  takeArticle() {
    this.adminService.getDetailArticle(this.id).subscribe(data => {
      this.articleData = data.Article;
      console.log(this.articleData)
      this.pictureUrl = 'http://realestate-task.draft2017.com/storage//photos/' + this.articleData.photo[0].photo;
    }, error => {
    })
  }


}
