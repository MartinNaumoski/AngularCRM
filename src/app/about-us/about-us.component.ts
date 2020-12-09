import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private mainService: AdminServiceService,private toastr: ToastrService) { }

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
    this.mainService.updateAboutUs(this.body).subscribe(data => {
      data.Message == "You didnt change anything." ? this.toastr.warning(data.Message, 'Success!') : this.toastr.success(data.Message, 'Success!');
    },err => {});
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
