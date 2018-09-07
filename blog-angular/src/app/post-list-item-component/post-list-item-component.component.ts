import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input()  title="coucou titre";
  @Input()  content= "coucou content";
  @Input()  loveIts= 99;
  @Input()  created_at="test";

  constructor() { 
  }

  ngOnInit() {
  }

}
