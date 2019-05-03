import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs = [
    {
      'blogId': '1',
      'lastModified': '2017-10-29',
      'created': '2017-10-29',
      'tags': [],
      'author': 0,
      'category': 'Comedy',
      'isPublished': true,
      'views': 0,
      'bodyHtml': 'this is body blog',
      'description': 'this is blog description',
      'title': 'This is blog 1'
    },
    {
      'blogId': '2',
      'lastModified': '2017-10-29',
      'created': '2017-10-29',
      'tags': [],
      'author': 0,
      'category': 'Comedy',
      'isPublished': true,
      'views': 0,
      'bodyHtml': 'this is body blog',
      'description': 'this is blog description',
      'title': 'This is blog 2'
    },
    {
      'blogId': '3',
      'lastModified': '2017-10-29',
      'created': '2017-10-29',
      'tags': [],
      'author': 0,
      'category': 'Comedy',
      'isPublished': true,
      'views': 0,
      'bodyHtml': 'this is body blog',
      'description': 'this is blog description',
      'title': 'This is blog 3'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
