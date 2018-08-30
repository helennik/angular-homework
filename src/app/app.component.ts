import {Component, EventEmitter} from '@angular/core';
import {ListElement} from './common/interfaces/list-element.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public selectedElement: ListElement ;
}
