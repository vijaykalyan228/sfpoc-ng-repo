import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'spacePlus'})
export class SpacePlusPipe implements PipeTransform {
  transform(param: string){
    return param==null || param==''?'':param.split('+').join(' ');
  }
}
