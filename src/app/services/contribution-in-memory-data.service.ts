import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Contribution} from "../interfaces/contribution";

@Injectable({
  providedIn: 'root'
})
export class ContributionInMemoryDataService implements InMemoryDbService {
  constructor() {
  }

  createDb() {
    const contribution = [
      {
        id: 1, userId: 'Marc Simó', title: 'Munta munta', url: 'http://www.efuneraria.com',
        publicationTime: '2020-05-20T18:00:00', comments: 0, points: 1, hidden: 0, liked: false, show: false
      },
      {
        id: 2, userId: 'Albert Pinto', title: 'Algú vol un croissant?', url: 'http://google.com',
        publicationTime: '2020-05-20T19:00:00', comments: 0, points: 1, hidden: 0, liked: false, show: false
      },
      {
        id: 3, userId: 'Xavier Campos', title: 'Posa qualsevol cosa', text: 'Franco franco franco',
        publicationTime: '2020-05-20T20:00:00', comments: 0, points: 1, hidden: 0, liked: false, show: false
      },
      {
        id: 4, userId: 'Enric Hernando', title: 'Santiago Del Rey cuerpo escombro',
        url: 'https://instagram.com/alexisren?igshid=1qjuvdsrnscih', publicationTime: '2020-05-20T21:00:00',
        comments: 0, points: 1, hidden: 0, liked: false, show: false
      },
      {
        id: 5, userId: 'Santiago Del Rey', title: 'Qualcomm', text: 'Mañana no hay clase',
        publicationTime: '2020-05-20T22:00:00', comments: 0, points: 1, hidden: 0, liked: false, show: false
      }
    ];

    return {contribution};
  }

  genId(contributions: Contribution[]): number {
    return contributions.length > 0 ? Math.max(...contributions.map(contribution => contribution.id)) + 1 : 1;
  }
}
