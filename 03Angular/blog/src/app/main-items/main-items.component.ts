import { Component, OnInit } from '@angular/core';
import { MainItem } from '../mainItem';
import { MainItemService } from '../main-item.service';
import { MessageService } from '../message.service';
import {Router} from  '@angular/router'

@Component({
  selector: 'app-main-item',
  templateUrl: './main-items.component.html',
  styleUrls: ['./main-items.component.css']
})

export class MainItemComponent implements OnInit {
  mainItems: MainItem[] = [];
  selectedItem?: MainItem;

  constructor(private mainItemService: MainItemService, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.getMainItems();
  }

  onSelect(mainItem: MainItem): void {
    this.selectedItem = mainItem;
    mainItem.hidden = !mainItem.hidden
    this.messageService.add(`MainItemComponent: Selected mainItem id=${mainItem.id}`);
  }

  getMainItems(): void {
    this.mainItemService.getArticles()
        .subscribe(mainItems => this.mainItems = mainItems);
  }

  Search(): void{
    const searchBar = document.getElementById('search-bar') as HTMLInputElement;
    const text = searchBar.value.trim();

    if(text.length > 0){
      this.mainItemService.getArticles().subscribe(articles => {
        this.mainItems = articles.filter(a => {
          return a.name.toLowerCase().includes(text.toLowerCase());
        })
      })
    }
    
    else{
      this.mainItemService.getArticles().subscribe(mainItem => this.mainItems = mainItem);
    }    
  }
}
