import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStringDate'
})
export class FormatStringDatePipe implements PipeTransform {

  transform(value: string): string {
    return value !== ''
      ? new Date(value).toLocaleDateString()
      : '';
  }
}
