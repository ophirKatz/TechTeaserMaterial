import { Teaser } from './../../../../model/teaser/teaser.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teaser-item',
  templateUrl: './teaser-item.component.html'
})
export class TeaserItemComponent implements OnInit {
  @Input() teaser: Teaser;

  constructor() { }

  ngOnInit(): void {
  }
}