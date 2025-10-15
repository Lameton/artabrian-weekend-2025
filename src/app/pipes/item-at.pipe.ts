import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'itemAt' })
export class ItemAtPipe implements PipeTransform {
  transform<T>(array: T[], index: number): T | undefined {
    return Array.isArray(array) ? array[index] : undefined;
  }
}
