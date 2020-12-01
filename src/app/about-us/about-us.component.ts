import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUsData = [];
  title = '';
  body = '';
  constructor(private mainService: AdminServiceService) { }

  ngOnInit(): void {
    this.getAbousUsData()

  }
  getAbousUsData(){
    this.mainService.getAboutUsData().subscribe((data) => {
      this.aboutUsData = data; 
      this.title = this.aboutUsData["About us"].title;
      this.body = this.aboutUsData["About us"].body;
    });
    let bodyObj = {
      "title":this.title,
      "body":this.body
    }
    this.mainService.updateAboutUs(bodyObj);

  }
  updateAboutUs(title,body){
    let bodyObj = {
      "title":title,
      "body":body,
    }
    this.mainService.updateAboutUs(bodyObj).subscribe();
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
