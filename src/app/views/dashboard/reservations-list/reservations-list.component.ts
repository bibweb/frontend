import {Component, Input, OnInit} from '@angular/core';
import {Book} from '@app/views/books/model';
import {Reservation, ReservationService} from '@app/core';
import {BookService} from '@app/views/books/services';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html'
})
export class ReservationsListComponent implements OnInit {

  reservedBooks: Book[] = [];
  private reservations: Reservation[];

  constructor(private reservationService: ReservationService,
              private bookService: BookService) {
  }

  @Input()
  user: number;

  ngOnInit() {
    this.reservationService.getReservations(this.user).subscribe((reservations) => {
      this.reservations = reservations;
      this.reservations.forEach((item, index) => {
        if(item.active) {
          this.bookService.getBook(item.bookId).subscribe((book) => {
            this.reservedBooks.push(book);
          });
        }
      })
    })
  }

}
