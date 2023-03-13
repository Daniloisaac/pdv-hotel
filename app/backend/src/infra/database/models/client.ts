import { Model, DataTypes} from 'sequelize';

import sequelize from '../config/SequelizeConfig';


export default class Client extends Model {
  declare id:number;
  declare name:string;
  declare phone:string;
  declare email:string;
}

Client.init({
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
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: true,
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  tableName: 'clients',
  timestamps: false,
  underscored: true,
});
