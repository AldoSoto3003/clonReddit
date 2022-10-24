import { Component } from '@angular/core';

import { Article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  articles: Article[];
  newtitle: HTMLInputElement ;
  newlink: HTMLInputElement;
  
  constructor(){
    this.articles = [
    new Article('Angular', 'http://angular.io', 3),
    new Article('Fullstack','http://fulstack.io',2),
    new Article('Angular Homepage','http://angular.io',1),
    ];
  }


addArticle(title: HTMLInputElement,link: HTMLInputElement): boolean{
  
  this.articles.push(new Article(title.value,link.value));
  document.getElementsByTagName("input")[0].value = "";
  document.getElementsByTagName("input")[1].value = "";
  
  return false;
}

sortedArticles(): Article[]{
  return this.articles.sort((a:Article, b: Article) => b.votes - a.votes);
}


}
