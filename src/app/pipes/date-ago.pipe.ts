import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let date = "";
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
        return 'Just now';
      const intervals = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0)
          if (i == 'day') {
            if (counter === 1) {
              date = date.concat(counter + ' ' + i + ', '); // singular (1 day ago)
            } else {
              date = date.concat(counter + ' ' + i + 's, '); // plural (2 days ago)
            }
          }
          else if (counter === 1) {
            if (date!="") counter = counter % 24;
            date = date.concat(counter + ' ' + i + ' ago'); // singular (1 day ago)
            return date;
          } else {
            if (date!="") counter = counter % 24;
            date = date.concat(counter + ' ' + i + 's ago'); // plural (2 days ago)
            return date;
          }
      }
    }
    return value;
  }

}
