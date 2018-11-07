export class Checkout {
  id: number;
  userId: number;
  bookId: number;
  checkoutDate: Date;
  bookTitle: string;
  dueDate: Date;
  stillOut: boolean;
}
