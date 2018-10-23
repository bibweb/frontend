import {Component, OnInit, Input} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Book} from '../model/book';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private location: Location,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  goToUpdateBook(): void {
    this.router.navigateByUrl('/books/' + this.book.id + '/update');
  }
}
