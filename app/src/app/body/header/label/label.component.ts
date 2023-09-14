import { Component, Input } from '@angular/core';
import { Label } from 'src/app/models/Label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input() label?:Label;
}
