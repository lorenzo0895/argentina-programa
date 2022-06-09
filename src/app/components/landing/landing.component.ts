import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  @Input() isEditable: boolean = false;
  @Input() profileImage: string = "https://media-exp1.licdn.com/dms/image/C4E03AQFZRXa0GCTbjA/profile-displayphoto-shrink_400_400/0/1630669685026?e=1658966400&v=beta&t=OTFCOWgqLJCCf_LTTKesd9Hik8FQTG5QgBBHankZACM";
  @Input() landingImage: string = "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20170852/circuitos-microsoft.jpg";

  constructor() { }

}
