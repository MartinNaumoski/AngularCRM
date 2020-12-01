import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { AdminServiceService } from '../../app/admin-service.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactData :any;
  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.getContacts().subscribe( data => {
      this.contactData = data["Contact-Us"];
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
