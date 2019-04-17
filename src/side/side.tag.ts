import { Input, Component } from '@angular/core';

@Component({
  selector: 's-side',
  templateUrl: './side.tag.html',
  styleUrls: ['./side.tag.sass']
})
export class SideTag {
  @Input() text = '';

}
