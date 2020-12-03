import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../app/admin-service.service'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  articleData:any = [];
  private routeSub!: Subscription;
  id = 0;
  constructor(private adminService: AdminServiceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
 
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.adminService.getDetailArticle(this.id).subscribe(data=> {
      this.articleData = data.Article;
    },error => {
    })
  }
  editArticle(){
    this.router.navigate(['edit-article/'+this.id]);
  }
  toogleSideBar(event: any) {
    let sideBar = document.getElementById("mySidebar");
    let adminPanel = document.getElementById("adminPanel");

    if (sideBar != null && adminPanel != null) {
      if (sideBar.classList.contains("animation-in")) {
        sideBar.classList.add("animation-out");
        sideBar.classList.remove("animation-in");
        adminPanel.style.display = "none";
      }
      else {
        sideBar.classList.add("animation-in");
        sideBar.classList.remove("animation-out");
        adminPanel.style.display = "block";
      }
    }
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
