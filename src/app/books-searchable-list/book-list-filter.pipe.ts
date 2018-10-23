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
      return book.title.toString().toLowerCase().includes(searchText.toString().toLowerCase());
    });
  }
}
