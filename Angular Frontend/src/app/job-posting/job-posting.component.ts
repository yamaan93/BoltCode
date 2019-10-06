import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss'],
})
export class JobPostingComponent implements OnInit {
  // @Input() title:string;
  // @Input() description:string;
  // @Input() companyName:string;
  // @Input() date:Date;
  // @Input() languages: string;
  // @Input() imageURL: string;
  // @Input() poster:string;
  @Input() posting:{ title:string,description:string,companyName:string,date:Date,languages: string,imageURL: string, poster:string, reward:number};
  
  constructor() { }

  ngOnInit() {
  }

}
