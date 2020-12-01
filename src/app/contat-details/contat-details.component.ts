import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../app/admin-service.service'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contat-details',
  templateUrl: './contat-details.component.html',
  styleUrls: ['./contat-details.component.css']
})
export class ContatDetailsComponent implements OnInit {
  contactData = [];
  private routeSub!: Subscription;
  id = 0;
  constructor(private adminService: AdminServiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.adminService.getDetailContact(this.id).subscribe(data => {
      this.contactData = data.Contact;
    }, error => {
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
