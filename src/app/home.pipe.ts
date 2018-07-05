import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "home"
})
export class HomePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
