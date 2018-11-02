import { BookrequestsModule } from './bookrequests.module';

describe('BookrequestsModule', () => {
  let bookrequestsModule: BookrequestsModule;

  beforeEach(() => {
    bookrequestsModule = new BookrequestsModule();
  });

  it('should create an instance', () => {
    expect(bookrequestsModule).toBeTruthy();
  });
});
