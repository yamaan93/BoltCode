import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  public jobPostings: { title:string,description:string,companyName:string,date:Date,languages: string,imageURL: string, poster:string, reward:number}[];
  constructor() { 
    this.jobPostings = [];
    for (let i in [1,2,3,4,5,6,7,8]) {
    this.jobPostings.push({title:"Angular Frontend Development",
                      description:("Add a generic sidebar to RBC's in-development careers page. Figma UI/UX will be provided and must be replicated. Mobile view MUST be taken into consideration."),
                      date:new Date(),languages:"Angular 8, HTML, CSS, TypeScript",
                      imageURL:"../assets/img/bg5.jpg",
                      companyName:"Deloitte",
                      poster:"John Doe",
                      reward:100
    },)


  }
  };


  addJob(jobPosting:{ title:string,description:string,companyName:string,date:Date,languages: string,imageURL: string, poster:string, reward:number}) {
    this.jobPostings.push(jobPosting);
  }
  getJobs() {
    return this.jobPostings;
  }
}
