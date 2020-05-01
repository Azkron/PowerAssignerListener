import { RequestAssingments } from './../Model/RequestAssingment';
import { HttpClient } from '@angular/common/http';
import { SignalRService } from './../services/signal-r.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.less'],
})
export class ViewerComponent implements OnInit {
  constructor(
    private signalRService: SignalRService,
    private http: HttpClient,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  requestAssingments: RequestAssingments = null;

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferAssingmentsListener(this.onRequestAssingments);
    this.startHttpRequest();
  }

  private onRequestAssingments = (requestAssingments: RequestAssingments) => {
    this.requestAssingments = requestAssingments;
    console.log(this.requestAssingments);



    this.changeDetectionRef.detectChanges();
  }

  private startHttpRequest = () => {
    this.http
      .get('https://localhost:5001/api/powerAssinger')
      .subscribe(console.log);
  };
}
