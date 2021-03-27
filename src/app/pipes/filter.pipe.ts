import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value?: Array<any>, arg?: string): any {
    let item = value;
    
    //si tiene algo y que no sean espacios 
    //trim quita los espacios a la palabra
    if(arg!==undefined && arg.trim().length>0){
      item = value?.filter(x=>x.name.toLowerCase().includes(arg.toLowerCase()));
    }
    return item;  
  }

}
