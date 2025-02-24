import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(arr: string[], ...args: unknown[]): unknown {
    return arr.sort();
  }

}
