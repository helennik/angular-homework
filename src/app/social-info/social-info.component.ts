import {Component, Input, OnInit} from '@angular/core';
import {SocialInfo} from '../common/interfaces/social-info.interface';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent implements OnInit {

    @Input()
    socialInfo: SocialInfo;

  constructor() { }

  ngOnInit() {
  }

}
