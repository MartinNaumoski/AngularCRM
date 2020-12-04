import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article = {
    title: '',
    body: '',
    city: '',
    address: '',
    for: '',
    price: '',
    type: '',
    avalible:'',
    phone_number:''
  }
  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
  } 
  createArticle(){
    console.log(JSON.stringify(this.article))
    this.article.city ="gjakove";
    this.adminService.createArticle(this.article).subscribe(data => {

    },error => {
      console.log(error)
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
