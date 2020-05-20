import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Comment} from "../interfaces/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentInMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    const comments = [
      {
        id: 101, userId: 'Enric Hernando', title: null, text:'Açò no té bona pinta',
        publicationTime: '2020-05-20T18:30:00', comments: 0, points: 1, hidden: 0, liked: false, show: false,
        contributionId: 1, parentId: null
      },
      {
        id: 102, userId: 'Marc Simó', title: null, text:'Me cago en tu',
        publicationTime: '2020-05-20T18:45:00', comments: 0, points: 1, hidden: 0, liked: false, show: false,
        contributionId: 1, parentId: 101
      },
      {
        id: 103, userId: 'Santiago Del Rey', title: null, text:'¡Lo quiero ya!',
        publicationTime: '2020-05-20T19:30:00', comments: 0, points: 1, hidden: 0, liked: false, show: false,
        contributionId: 2, parentId: null
      },
    ];

    return {comments};
  }

  genId(comments: Comment[]): number {
    return comments.length > 0 ? Math.max(...comments.map(comment => comment.id)) + 1 : 101;
  }
}
