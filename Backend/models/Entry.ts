// models/Entry.ts
import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';
import User from './User';

const Entry = sequelize.define('Entry', {
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
  category: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
});

Entry.belongsTo(User, { foreignKey: 'user_id' });

export default Entry;
