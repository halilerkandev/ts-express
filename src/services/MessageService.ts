import * as MessageRepository from '../repositories/MessageRepository';

export const postMessage = async ({ userId, message }: {
  userId: number,
  message: string
}) => {
  const newMessage = MessageRepository.createMessage(userId, message);
  return newMessage;
};

export const getAllMessages = async () => {
  const messages = MessageRepository.getMessages();
  return messages;
};

export const updateMessageByUserAndMessageId = async ({ userId, messageId, message }: { userId: number, messageId: number, message: string }) => {
  await MessageRepository.updateMessage(userId, messageId, message);
};

export const deleteMessageByUserAndMessageId = async ({ userId, messageId }: { userId: number, messageId: number }) => {
  await MessageRepository.deleteMessage(userId, messageId);
};
