import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args): string {
    return value.length > 0 ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : value;
  }
}
