import {Pipe, PipeTransform} from '@angular/core';
import {ListElement} from '../interfaces/list-element.interface';
import {ElementType} from '../enums/element-type.enum';

@Pipe({
    name: 'elementFilter'
})
export class ElementFilterPipe implements PipeTransform {

    transform(elementsList: ListElement[], elementType: ElementType): any {
        if (!elementType) {
            return elementsList;
        }

        return elementsList.filter((element: ListElement) => element.type === elementType);
    }

}
