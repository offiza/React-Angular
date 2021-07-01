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
  constructor(private route: ActivatedRoute, private mainItemService: MainItemService) { }

  @Input() mainItem?: MainItem;

  ngOnInit(): void {
    this.getMainItems();
  }

  getMainItems(): void {
    this.mainItemService.getArticles()

    .subscribe(mainItems => {
      this.mainItems = mainItems;   
      this.getParams();
    });
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
}
