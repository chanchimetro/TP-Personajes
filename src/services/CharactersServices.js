import config from "../database/dbconfig.js";
import sql from 'mssql';

export default class CharactersServices {
    static getAll = async() => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Characters');
                returnEntity = result.recordsets[0];
        }catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}