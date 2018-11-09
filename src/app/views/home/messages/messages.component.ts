import {Component} from '@angular/core';
import {MessageService} from '@app/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {
  }

  reloadPage(): void {
    window.location.reload();
  }

}
