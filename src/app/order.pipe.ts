import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {


  transform(value: any, args?: any): any {
    var order = [];
    for(let val of value){
      order.push(val);
      console.log(order);
    }
    return order;


  }

}
