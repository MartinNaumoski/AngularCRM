import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  private routeSub!: Subscription;
  id = 0;
  article = [];
  constructor(private adminService: AdminServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.takeArticleId();
  }
  updateArticle(){
    console.log(this.article);
    this.adminService.editArticle(this.article,this.id).subscribe(data => {
      console.log(data)
    },error => {
      console.log(error)
    });
  }
  takeArticleId(){
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    }); 
    this.adminService.getArticle(this.id).subscribe(data => {
      this.article = data.Article;
      console.log(this.article);
    }, error => {
    })
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
}
