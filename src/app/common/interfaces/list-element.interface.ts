import {Weather} from './weather.interface';
import {SocialInfo} from './social-info.interface';

export interface ListElement {
    images: string[],
    address: string,
    phone: number
    weather: Weather,
    socialInfo: SocialInfo,
    type: number
}
