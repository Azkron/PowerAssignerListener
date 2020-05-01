import { RequestAssingments } from './../Model/RequestAssingment';
import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  public data: RequestAssingments;

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/assingments')
      .build();

    this.hubConnection
      .start()
      .then(_ => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  };

  public addTransferAssingmentsListener(callback: ( requestAssingments: RequestAssingments) => void){
    this.hubConnection.on('transferRequestAssingments', callback);
  }

  // = () => {
  //   this.hubConnection.on('transferRequestAssingments', data => {
  //     this.data = data;
  //     console.log(data);
  //   });
  // };
}
