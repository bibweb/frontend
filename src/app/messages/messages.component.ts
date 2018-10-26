import {Component, OnInit} from '@angular/core';
import {MessageService} from '@app/service/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {
  }

  reloadPage(): void {
    window.location.reload();
  }

}
