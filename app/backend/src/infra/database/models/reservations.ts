import { Model, DataTypes} from 'sequelize';

import sequelize from '../config/SequelizeConfig';
import Client from './client';


export default class Reservations extends Model {
  declare id:number;
  declare dataCheckin: Date;
  declare dateCheckout: Date;
  declare roomNumber: number;
  declare numberPeople: number;
  declare dailyRate: number;
}

Reservations.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  clientId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'clients',
      key: 'id',
  },
},

  dataCheckin: {
    type: DataTypes.DATE
  },
  dateCheckout: {
    type: DataTypes.DATE
  },
  roomNumber:{ 
    type: DataTypes.INTEGER
  },
  numberPeople: {
    type: DataTypes.INTEGER
  },
  dailyRate:{
    type: DataTypes.DECIMAL(5,2)
  },
}, {
  sequelize,
  tableName: 'reservations',
  timestamps: false,
  underscored: true,
});

Client.hasMany(Reservations, { foreignKey: 'clientId', as: 'clientHotel' });
Reservations.belongsTo(Client, { foreignKey: 'clientId', as: 'clientHotel' });
