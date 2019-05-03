import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  public allBlogs = [
    {
      'blogId': '1',
      'lastModified': '2017-10-29',
      'created': '2017-10-29',
      'tags': ['tag1','tag2','tag3'],
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
  constructor(private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId)
    this.getSingleBlogInfo(myBlogId)
  }

  public getSingleBlogInfo(currentBlogId):any {
    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog
      }
    }
    console.log(this.currentBlog)
  }

}
