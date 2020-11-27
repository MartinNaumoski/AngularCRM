import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private adminServiceService: AdminServiceService) { }

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
