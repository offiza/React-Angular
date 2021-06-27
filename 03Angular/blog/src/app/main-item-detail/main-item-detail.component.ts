import { Component, OnInit, Input } from '@angular/core';
import { MainItem } from '../mainItem';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main-item-detail',
  templateUrl: './main-item-detail.component.html',
  styleUrls: ['./main-item-detail.component.css']
})
export class MainItemDetailComponent implements OnInit {
  mainItems: MainItem[] = [];
  selectedItem?: MainItem;

  @Input() mainItem?: MainItem;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mainItems.forEach((item: MainItem) => {
        if (item.id == params.id) {
          this.mainItem = item;
        }
      });
    });

  }

}
