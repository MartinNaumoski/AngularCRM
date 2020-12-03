import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  aboutUsData: any = [];
  title = '';
  body = {
    title: '',
    body: ''
  };
  constructor(private mainService: AdminServiceService) { }

  ngOnInit(): void {
    this.getAbousUsData()

  }
  getAbousUsData() {
    this.mainService.getAboutUsData().subscribe((data) => {
      this.aboutUsData = data;
      this.body.title = this.aboutUsData["About us"].title;
      this.body.body = this.aboutUsData["About us"].body;
    });


  }
  updateAboutUs() {
    console.log(this.body)
    this.mainService.updateAboutUs(this.body).subscribe(data => {
      console.log(data)
    });
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
