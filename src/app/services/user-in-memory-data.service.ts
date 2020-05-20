import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class UserInMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const users = [
      {
        username: 'Marc Simó', dateJoined: '2020-05-20T10:00:00', karma: 1, about: 'Munto cada dia',
        email: 'marc.simo@emponews.com', showDead: false, noProCast: false, maxVisit: 20,
        minAway: 20, delay: 0
      },
      {
        username: 'Albert Pinto', dateJoined: '2020-05-20T10:00:00', karma: 1, about: 'Forner de professió',
        email: 'albert.pinto@emponews.com', showDead: false, noProCast: false, maxVisit: 20,
        minAway: 20, delay: 0
      },
      {
        username: 'Xavier Campos', dateJoined: '2020-05-20T10:00:00', karma: 1, about: 'No se que posar',
        email: 'xavier.campos@emponews.com', showDead: false, noProCast: false, maxVisit: 20,
        minAway: 20, delay: 0
      },
      {
        username: 'Enric Hernando', dateJoined: '2020-05-20T10:00:00', karma: 1, about: 'Arriba España',
        email: 'enric.hernando@emponews.com', showDead: false, noProCast: false, maxVisit: 20,
        minAway: 20, delay: 0
      },
      {
        username: 'Santiago Del Rey', dateJoined: '2020-05-20T10:00:00', karma: 1, about: 'Capgrós de naixement',
        email: 'santiago.del.rey@emponews.com', showDead: false, noProCast: false, maxVisit: 20,
        minAway: 20, delay: 0
      },
    ];

    return {users};
  }
}
