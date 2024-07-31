import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-warning-levels',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './warning-levels.component.html',
  styleUrls: ['./warning-levels.component.css']
})
export class WarningLevelsComponent {
  warningLevels: { threshold: number, color: string }[] = [];
  newThreshold = 0;
  newColor = '';

  @Output() warningLevelsChange = new EventEmitter<{ threshold: number, color: string }[]>();

  addWarningLevel() {
    if (this.newThreshold > 0 && this.newColor) {
      this.warningLevels.push({ threshold: this.newThreshold, color: this.newColor });
      this.warningLevelsChange.emit(this.warningLevels);
      this.newThreshold = 0;
      this.newColor = '';
    }
  }
}