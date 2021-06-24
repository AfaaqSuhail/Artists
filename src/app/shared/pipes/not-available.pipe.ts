import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NotAvailable'
})
export class NotAvailable implements PipeTransform{
    transform(url) : string {
        return url.length ? url : 'N/A';
    }
}