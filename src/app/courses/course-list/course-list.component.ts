import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-9796',
        duration: 120,
        rating: 5,
        releaseDate: 'November, 25'
      },
      {
        id: 2,
        name: 'Angular',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-9796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'November, 25'
      },
      {
        id: 3,
        name: 'Angular',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-9796',
        duration: 120,
        rating: 5,
        releaseDate: 'November, 25'
      }
    ];
  }

}
