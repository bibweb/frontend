import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "@app/model/book";

@Pipe({
  name: 'bookListFilter'
})

export class BookListFilterPipe implements PipeTransform {
  transform(items: Book[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( book => {
      return this.objectContains(book, searchText.toLowerCase());
    });
  }

  objectContains(obj, term: string): boolean {
    for (let key in obj){
        if (String(obj[key]).toLowerCase().includes(term)) return true;
    }
    return false;
  }
}
