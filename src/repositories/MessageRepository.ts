import Auth from '../models/Auth';
import User from '../models/User';
import Message from '../models/Message';

User.hasMany(Message, {
  sourceKey: 'id',
  foreignKey: 'ownerId',
  as: 'messages',
});

export const createMessage = async (userId: number, message: string) => {
  const newMessage = await Message.create({ ownerId: userId, message });
  return newMessage;
};

export const getMessages = async () => {
  const messages = await Message.findAll();
  return messages;
};

export const updateMessage = async (userId: number, messageId: number, message: string) => {
  const messages = await Message.update({
    message,
  }, {
    where: {
      ownerId: userId,
      id: messageId,
    },
  });
  return messages;
};

export const deleteMessage = async (userId: number, messageId: number) => {
  await Message.destroy({
    where: {
      ownerId: userId,
      id: messageId,
    },
  });
};
