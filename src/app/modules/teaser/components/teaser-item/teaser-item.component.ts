import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaser-item',
  template: `
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1">teaser.name</h6>
      <small>3 days ago</small>
    </div>
    <small>
      <a href="#">
        teaser.author
      </a>
    </small>
  `
})
export class TeaserItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
