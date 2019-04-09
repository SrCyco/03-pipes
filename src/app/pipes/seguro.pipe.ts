import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser/';

@Pipe({
  name: 'seguro'
})
export class SeguroPipe implements PipeTransform {

  constructor( private domSanitazer: DomSanitizer) {}

  transform(value: string, url: string): SafeResourceUrl {
    return this.domSanitazer.bypassSecurityTrustResourceUrl( url + value );
  }

}
