import { Component, EventEmitter, Output, Input } from '@angular/core';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipListChange } from '@angular/material/chips';


@Component({
  selector: 'app-editable-chip-list',
  templateUrl: './editable-chip-list.component.html',
  styleUrls: ['./editable-chip-list.component.css']
})
export class EditableChipListComponent {
  @Input() placeholder: string;
  @Input() chips: string[] = [];

  constructor() { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.chips.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  remove(item: string): void {
    const index = this.chips.indexOf(item);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, TAB];
}
