import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-angular';
  posts=[
      {title:"les réseaux sociaux rendent asociaux",
          content:"blablablablabla et blablablabla et encore blablalbalbla blablablablabla et blablablabla et encore blablalbalblablablablablabla et blablablabla et encore blablalbalblablablablablabla et blablablabla et encore blablalbalbla",
          loveIts:0,
          created_at: Date.now(),
          },
         {title:"les asociaux réseautent en rendant",
          content:"blablablablabla et blablablabla et encore blablalbalbla blablablablabla et blablablabla et encore blablalbalblablablablablabla et blablablabla et encore blablalbalblablablablablabla et blablablabla et encore blablalbalbla",
          loveIts:0,
          created_at: Date.now()},
          {title:"Rend le réseau raisonnable",
          content:"blablablablabla et blablablabla et encore blablalbalbla blablablablabla et blablablabla et encore blablalbalblablablablablabla et blablablabla et encore blablalbalblablablablablabla et blablablabla et encore blablalbalbla",
          loveIts:0,
          created_at: Date.now()},
          {title:"Socialisme socialisant",
          content:"blablablablabla et blablablabla et encore blablalbalbla blablablablabla et blablablabla et encore blablalbalblablablablablabla et blablablabla et encore blablalbalblablablablablabla et blablablabla et encore blablalbalbla",
          loveIts:0,
          created_at: Date.now()}
        ];          

  
  
}
