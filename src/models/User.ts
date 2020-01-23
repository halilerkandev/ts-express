import { Model, DataTypes, Association } from 'sequelize';
import { dbContext } from '../config/dbContext';
import Message from './Message';

class User extends Model {
  public id!: number;

  public email!: string;

  public password!: string;

  public name!: string;

  public bio: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public readonly messages?: Message[];

  public static associations: {
    messages: Association<User, Message>;
  };
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: dbContext,
    tableName: 'users',
    freezeTableName: true,
  },
);

export default User;
