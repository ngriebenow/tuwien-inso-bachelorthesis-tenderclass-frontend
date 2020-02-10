import { Component, OnInit, Output, NgModule } from '@angular/core';
import { Tender } from '../../dtos/tender';
import { LanguageEntity } from '../../dtos/languageentity';
import { TenderService } from '../../service/tender.service';
import {IMyDpOptions} from 'mydatepicker';
import {IMyDateModel} from 'mydatepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
})
export class RecommendationComponent implements OnInit {

  date: any = { year: 2020, month: 1, day: 20 };

  // le: LanguageEntity[] = [{ language: "DE", title: "Bauarbeiten", description: "Die Landstrasse soll erneuert werden."}]
  // tenders: Tender[] = [ { id: "EU01-123456", cpvs: ["72000000"], languageentities: this.le}];

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

    this.tenderService.getRecommendations(dateStr).subscribe(
          (t: Tender[]) => {
             this.tenders = t;
           },
           error => {

           }
        );
  }

}
