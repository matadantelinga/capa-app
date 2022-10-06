import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/utils/data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = User;

  constructor() {}

  ngOnInit() {}
}
