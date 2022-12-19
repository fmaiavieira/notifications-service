import { Content } from './content';
import { Notification } from './notification';

describe('Notification content', () => {
  it('it should be able to create a notification ', () => {
    const notification = new Notification({
      recipientId: 'test-recipient-id',
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
    });
    expect(notification).toBeTruthy();
  });
});
