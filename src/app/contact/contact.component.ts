import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showLabel(label: HTMLLabelElement) {
    label.classList.remove("bottom--30")
    label.classList.add("bottom-0")
  }
  HideLabel(label: HTMLLabelElement) {
    label.classList.remove("bottom-0");
    label.classList.add("bottom--30");
  }
}
