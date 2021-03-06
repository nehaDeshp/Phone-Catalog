import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})

export class FilterDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    var allowedContent=[];
    if(args == "" || args==undefined){
      return value;
    }
    for(let val of value){
      if(val.name.startsWith(args)){
        allowedContent.push(val);
      }
    }
    return allowedContent;
  }
}
