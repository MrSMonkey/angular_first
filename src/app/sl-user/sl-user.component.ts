import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sl-user',
  templateUrl: './sl-user.component.html',
  styleUrls: ['./sl-user.component.css']
})
export class SlUserComponent {
  private name = 'Semlinker';
  private address = {
    province: '福建',
    city: '厦门'
  };
}
