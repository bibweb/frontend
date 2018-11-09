import {BookAvailabilityState} from './bookAvailabilityState';
import {BookReservationState} from '@app/views/books/model/bookReservationState';

export class Book {
  id: number;
  title: string;
  isbn: string;
  releaseYear: number;
  numberOfPages: number;
  bookType: string;
  availability: BookAvailabilityState = BookAvailabilityState.AVAILABLE;
  reservationState: BookReservationState = BookReservationState.NOT_RESERVED_BY_YOU;
}
