import { Model, DataTypes } from 'sequelize';
import { dbContext } from '../config/dbContext';

class Message extends Model {
  public id!: number;

  public ownerId!: number;

  public message!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: dbContext,
    tableName: 'messages',
    freezeTableName: true,
  },
);

export default Message;
