export class BookRequest {
  id: number;
  isbn: string;
  user: string;
  state: BookRequestState = BookRequestState.NEW;
}

export enum BookRequestState {
  NEW = 0,
  ACCEPTED = 1,
  DECLINED = 2
}
export const BookRequestStateStrings = new Map<number, string>([
  [BookRequestState.NEW, 'New'],
  [BookRequestState.ACCEPTED, 'Accepted'],
  [BookRequestState.DECLINED, 'Declined']
]);
