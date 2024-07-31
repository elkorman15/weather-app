import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement;
}

@Component({
  selector: 'app-location-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css']
})
export class LocationSelectorComponent {
  @Output() locationChange = new EventEmitter<string>();

  onLocationChange(event: any) {
    this.locationChange.emit(event.target.value);
  }
}