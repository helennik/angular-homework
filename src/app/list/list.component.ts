import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {elementsListMock} from '../common/mocks/elements-list.mock';
import {ListElement} from '../common/interfaces/list-element.interface';
import {ElementType} from '../common/enums/element-type.enum';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    @Output()
    public selectedElement: EventEmitter<ListElement> = new EventEmitter();

    public elementsList: ListElement[] = elementsListMock;
    public selectedElementType: ElementType;
    public links: string[] = ['all', 'hotel', 'fishing', 'tours', 'weather'];

    constructor() {
    }

    ngOnInit() {
        this.selectedElementType = ElementType.all;
    }

    onFilterClick(type: string) {
        this.selectedElementType = ElementType[type];
    }

    onElementClick(selectedElement: ListElement) {
        this.selectedElement.emit(selectedElement);
    }
}
