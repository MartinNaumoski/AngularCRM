import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { AdminServiceService } from '../../app/admin-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactData: any;
  constructor(private adminService: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getContacts().subscribe(data => {
      this.contactData = data["Contact-Us"];
    })
  }
  viewDetails(id: any) {
    this.router.navigate(['contact' + '/' + id]);
  }
  deleteContact(id:any){
    //this.adminService.deleteContact(id).subscribe();
    alert("NE JA POVIKVI POSO EDNA E SAMO KE TI SE IZBRISHIT!");
    alert("INACE NAPRAENO SI E SVE!");
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
