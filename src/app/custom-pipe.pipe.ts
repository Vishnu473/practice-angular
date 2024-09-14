import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabPipe',
  standalone: true,
})
export class KebabPipePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/ /g, '-');
  }
}
