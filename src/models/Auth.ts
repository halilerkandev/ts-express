import { Model, DataTypes } from 'sequelize';
import { dbContext } from '../config/dbContext';

class Auth extends Model {
  public id!: number;

  public accessToken!: string;

  public tokenType!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Auth.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    accessToken: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tokenType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbContext,
    tableName: 'auths',
    freezeTableName: true,
  },
);

export default Auth;
