import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStringDate'
})
export class FormatStringDatePipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    return value !== '' && date.toString() != "Invalid Date"
      ? new Date(value).toLocaleDateString()
      : '';
  }
}
