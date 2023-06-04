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

    static getMovieInfo = async(id) => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT C.*, MS.* FROM Characters C INNER JOIN [CharacterXMovies&Shows] X ON C.Id = X.fkCharacter INNER JOIN [Movies&Shows] MS ON MS.Id = X.fkMovieOrShow WHERE MS.Id = @id');
                returnEntity = result.recordsets[0][0];
        }catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}