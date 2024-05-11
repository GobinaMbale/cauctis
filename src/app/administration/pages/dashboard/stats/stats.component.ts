import {Component, Input} from '@angular/core';
import {Stats} from '../../../../shared/interfaces/stat.interface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  @Input() stats: Stats[];
}
