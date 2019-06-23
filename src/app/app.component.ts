import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `
    <h3>{{title}}</h3>
    <div>
      <app-simple-form 
        *ngFor = "let message of mailService.messages"
        [message]="message.text"
        (update)="onUpdate(message.id, $event.text)"
      >
      </app-simple-form>
      <p>APP_URL:{{apiUrl}}</p>
      <p>{{address | json}}</p>
      <form (submit)="addSkills(skill.value)">
        <p>
          <label>技能：</label>
          <input #skill type="text"/>
        </p>
      </form>
      <nav>
        <a routerLink="/user">我的信息</a>
        <a routerLink="/members">Angular成员</a>
        <a routerLink="/test">test page</a>
      </nav>
      <button (click)="toggleSkills()">
        {{ showSkills ? "显示技能" : "隐藏技能" }}
      </button>
      <button (click)="increment()">+</button>
      <app-test [count]="count"></app-test>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  // showSkills: boolean;
  constructor(
    @Inject(MailService) private mailService,
    @Inject('apiUrl') private apiUrl,
  ) {
    // this.showSkills = true
  }
  private showSkills: boolean = true;
  private count: number = 0;
  increment() {
    this.count ++;
  }
  address = {
    province: '福建',
    city: '厦门'
  };
  toggleSkills() {
    this.showSkills = !this.showSkills;
  }
  onUpdate(id, text) {
    this.mailService.update(id, text);
    console.log(this.mailService);
  }
  title = 'app';
}
