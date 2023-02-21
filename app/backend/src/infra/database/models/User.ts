import { Model, DataTypes} from 'sequelize';

import sequelize from '../config/SequelizeConfig';


export default class Users extends Model {
  declare id:number;
  declare name:string;
  declare email:string;
  declare password:string;
}

Users.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: true,
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  tableName: 'users',
  timestamps: false,
});
