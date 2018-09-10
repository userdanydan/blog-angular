import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input()  title="";
  @Input()  content= "";
  @Input()  loveIts= 0;
  @Input()  doNotLoveIts=0;
  @Input()  created_at="test";

  constructor() { 
  }

  ngOnInit() {
  }
  getColor(){
    if(this.doNotLoveIts>this.loveIts)
      return 'red';
    return 'green';
  }
  onDontLoveIts(){
    this.doNotLoveIts++;
  }
  onLoveIts(){
    this.loveIts++;
  }

}
