import { Model, DataTypes } from "sequelize";
import sequelizeConnection from '../instances/mySqlConnection';

export interface PhrasesInstance extends Model {
    id: number;
    author: string;
    txt: string
}

export const Phrases = sequelizeConnection.define<PhrasesInstance>('phrases', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING
    },
    txt: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'phrases',
    timestamps: false
});


