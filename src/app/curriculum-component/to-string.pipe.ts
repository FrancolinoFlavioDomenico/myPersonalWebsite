import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString'
})
export class ToStringPipe implements PipeTransform {

  transform(value: {}): string {
    console.log(value)

    let tmpString = JSON.stringify(value).replace("{","").replace("}","").replace("\"","").replace("\"","");

    return tmpString;
  }

}
