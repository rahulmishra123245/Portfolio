import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experience!: string;

  constructor() {
    this.calculateExperience();
    // console.log("experience",this.experience);
    
  }

  calculateExperience() {
    const startDate = new Date('2023-02-13');
    const currentDate = new Date();
    
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();

    let experienceYears = yearsDiff;
    let experienceMonths = monthsDiff;

    if (monthsDiff < 0) {
      experienceYears--;
      experienceMonths = 12 + monthsDiff;
    }

    this.experience = `${experienceYears} years and ${experienceMonths+6} months`;
  }
}
