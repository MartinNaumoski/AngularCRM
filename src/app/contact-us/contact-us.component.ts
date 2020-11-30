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
      console.log(data)
      this.contactData = data["Contact-Us"];
      console.log(this.contactData)
    })
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
