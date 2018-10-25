import {BookAvailabilityState} from '@app/model/bookAvailabilityState';

export class Book {
  id: number;
  title: string;
  isbn: string;
  releaseYear: number;
  numberOfPages: number;
  bookType: string;
  availability: BookAvailabilityState = BookAvailabilityState.AVAILABLE;
}
