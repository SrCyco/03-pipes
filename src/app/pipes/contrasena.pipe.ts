import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, args: boolean = true): any {
    let hide = '';
    if(args){
      for (let i = 0; i < value.length; i++) {      
        hide += '*';
      }
      return hide;
    }else{
      return value;
    }
  }

}
