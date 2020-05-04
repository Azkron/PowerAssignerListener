import { Assingment } from './../Model/Assingment';
import { PowerPlant } from './../Model/PowerPlant';
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
    const powerplants = requestAssingments.powerRequest.powerplants;
    const assingments = requestAssingments.assingments;
    powerplants.forEach(p => p['p'] = assingments.find(a => a.name === p.name).p );
    powerplants.sort((p1, p2) => p1['p'] > p2['p'] ? -1 : 1);
    this.changeDetectionRef.detectChanges();
  }

  private startHttpRequest = () => {
    this.http
      .get('https://localhost:5001/api/powerAssinger')
      .subscribe(console.log);
  };
}
