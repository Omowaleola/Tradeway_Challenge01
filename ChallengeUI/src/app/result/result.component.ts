import { Component, OnInit } from '@angular/core';
import {ResultService} from "../shared/services/result.service";
import {ResultReport} from "../shared/models/views/ResultReportView.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  reportValues: ResultReport[];

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.getResultReport().subscribe((report)=>{
      this.reportValues=report ;
      console.log(this.reportValues);
    })
  }
  customizeLabel(arg) {
    return `${arg.argumentText} (${arg.percentText})`;
  }

}
