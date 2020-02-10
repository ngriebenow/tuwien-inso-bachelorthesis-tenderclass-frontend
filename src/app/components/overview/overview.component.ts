import { Component, OnInit, Output } from '@angular/core';
import { Tender } from '../dtos/tender';
import { LanguageEntity } from '../dtos/languageentity';
import { TenderService } from '../tender.service';
import {IMyDpOptions} from 'mydatepicker';
import {IMyDateModel} from 'mydatepicker';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  date: any = { date: { year: 2020, month: 1, day: 20 } };

  @Output() tenders: Tender[] = [];

  constructor(private tenderService: TenderService) { }

  ngOnInit() {
    this.loadTenders();
  }

  onDateChanged(event: IMyDateModel) {
    this.date = event.date;
    this.loadTenders();
  }

  loadTenders() {

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    var dateStr: string = this.date.year + "" + zeroPad(this.date.month,2) + "" + zeroPad(this.date.day,2)

    this.tenderService.getAll(dateStr).subscribe(
          (t: Tender[]) => {
             this.tenders = t;
           },
           error => {

           }
        );
  }


}

