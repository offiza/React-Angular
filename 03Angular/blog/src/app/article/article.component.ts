import { Component, OnInit, Input } from '@angular/core';
import { MainItem } from '../mainItem';
import { ActivatedRoute } from "@angular/router";
import { MainItemService } from '../main-item.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  mainItems: MainItem[] = [];
  param?: Number = 1;
  item?: MainItem;
  constructor(private route: ActivatedRoute, private mainItemServise: MainItemService) { }

  @Input() mainItem?: MainItem;

  ngOnInit(): void {
    this.getMainItems();
  }

  getMainItems(): void {
    this.mainItemServise.getArticles()

    .subscribe(mainItems => {
      this.mainItems = mainItems;   
      this.getParams();
    });
  }

  validateComment(comment: any): boolean{
    return (comment.name.length>1 && comment.text.length) ? true : false;
  }

  getParams(): void{
    this.route.params.subscribe(params => {
      this.mainItems.forEach((p: MainItem) => {
        if (p.id == params.id) {
          this.item = p;
        }
      });
    });
  }

  writeComment(): void{
    let id = this.item?.id;
    let name = (document.getElementById("name") as HTMLInputElement).value.trim();
    let text = (document.getElementById("text") as HTMLInputElement).value.trim();

    let newComment = {
      id,
      name,
      text
    };

    if(!this.validateComment(newComment)){
      alert('All fields must be filled');
      return;
    }

    this.mainItemServise.postComment(newComment).subscribe(result => {
      if(result.err){
        alert(result.err);
        return;
      }
      alert("Success!");
    })
  }
}
