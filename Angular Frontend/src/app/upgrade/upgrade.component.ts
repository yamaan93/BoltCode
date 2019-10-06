import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {

  content = new FormControl('');
  title = new FormControl('');
  constructor() {
    // this.content = FormControl();
   }

  ngOnInit() {
  }

}
