import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toogleSideBar(event: any) {
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
