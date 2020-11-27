import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toogleSideBar(event: any) {
    console.log("vleze")
    let sideBar = document.getElementById("mySidebar");
    if (sideBar != null) {
      if (sideBar.classList.contains("animation-in")) {
        sideBar.classList.add("animation-out");
        sideBar.classList.remove("animation-in");
      }
      else {
        sideBar.classList.add("animation-in");
        sideBar.classList.remove("animation-out");
      }
    }
  }
}
