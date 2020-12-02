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
  allContactData:any = [];
  searchTerm = '';

  constructor(private adminService: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getContacts().subscribe(data => {
      this.contactData = data["Contact-Us"];
      this.allContactData = this.contactData;
      console.log(this.allContactData)
    })
  }
  viewDetails(id: any) {
    this.router.navigate(['contact' + '/' + id]);
  }
  deleteContact(id: any) {
    //this.adminService.deleteContact(id).subscribe();
    alert("NE JA POVIKVI POSO EDNA E SAMO KE TI SE IZBRISHIT!");
    alert("INACE NAPRAENO SI E SVE!");
  }
  filterContacts() {
    let tempTableData: any = [];
    this.allContactData.forEach(element => {
      if (element.subject.includes(this.searchTerm)
        || element.name.includes(this.searchTerm)
        || element.email.includes(this.searchTerm)
        || element.created_at.includes(this.searchTerm)) {
        tempTableData.push(element);
      }
    });
    this.searchTerm.length == 1 ? this.contactData = this.allContactData : this.contactData = tempTableData;
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
