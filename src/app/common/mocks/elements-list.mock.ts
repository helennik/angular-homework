import {ElementType} from '../enums/element-type.enum';
import {ListElement} from '../interfaces/list-element.interface';

export const elementsListMock: ListElement[] = [{
    images: [
        'res.jpg',
        'r1.jpg'
    ],
    address: 'address',
    phone: 16507599755,
    weather: {
        title: 'title',
        icon: 'cloudy.png',
        water: 20,
        temperature: 14
    },
    socialInfo: {
        title: 'title',
        img: 'res.jpg',
        followers: 152,
        following: 1889
    },
    type: ElementType.fishing
}, {
    images: [
        'r1.jpg'
    ],
    address: 'address',
    phone: 16507599755,
    weather: {
        title: 'title',
        icon: 'cloudy.png',
        water: 60,
        temperature: 20
    },
    socialInfo: {
        title: 'title',
        img: 'res.jpg',
        followers: 160,
        following: 1989
    },
    type: ElementType.tours
}, {
    images: [
        'r1.jpg',
        'r1.jpg'
    ],
    address: 'address',
    phone: 16507599755,
    weather: {
        title: 'title',
        icon: 'cloudy.png',
        water: 15,
        temperature: 15
    },
    socialInfo: {
        title: 'title',
        img: 'res.jpg',
        followers: 90,
        following: 1889
    },
    type: ElementType.hotel
}];
