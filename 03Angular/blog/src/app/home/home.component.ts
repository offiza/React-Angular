import { Component, OnInit } from '@angular/core';
import {MainItem} from '../mainItem';
import {MainItemService} from '../main-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor( private mainItemServise: MainItemService, private router: Router) { }

  ngOnInit(): void {
  }

  validateArticle(article: any){
    if(article.name.length > 3 && article.content.length > 10 && article.author.length > 2){
      return true;
    }
    else return false;
  }

  addArticle(){
    let nextId: number;
    this.mainItemServise.getNextArticleId().subscribe(res => nextId = res.id);
    
    let name = (document.getElementById('header') as HTMLInputElement).value.trim();
    let content = (document.getElementById('content') as HTMLInputElement).value.trim();
    let author = (document.getElementById('author') as HTMLInputElement).value.trim();
    let date = "05.05.2005";


    let images: Array<any> = [];
    
    let newArticle = {
      name,
      content,
      author,
        date
    }

    if(!this.validateArticle(newArticle)){
      alert('All fields must be filled');
      return;
    }

    this.mainItemServise.postArticle(newArticle).subscribe(result => {
      if(result.err){
        alert(result.err);
        return;
      }
      alert("Success!");
    })
  }
}
