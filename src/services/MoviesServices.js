import config from "../database/dbconfig.js";
import sql from 'mssql';

export default class MoviesServices {
    static getAll = async() => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT Id, Image, Title, ReleaseDate FROM [Movies&Shows]');
                returnEntity = result.recordsets[0];
        }catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}