import {Pipe, PipeTransform} from '@angular/core';
import * as Phone from '@vtex/phone';
import '@vtex/phone/countries/USA';

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {

    transform(number) {
        const phone = Phone.getPhoneInternational(number.toString());

        return Phone.format(phone, Phone.INTERNATIONAL);
    }

}
