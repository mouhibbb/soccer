import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string): any {
let reverse:any
for (let i = 0; i < ch.length; i++) {
  reverse=ch[i]+reverse 
}
return reverse
}

}
