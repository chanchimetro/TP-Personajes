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
                .input('Id', sql.Int, id)
                .query('SELECT C.*, MS.* FROM Characters C INNER JOIN [CharacterXMovies&Shows] X ON C.Id = X.fkCharacter INNER JOIN [Movies&Shows] MS ON MS.Id = X.fkMovieOrShow WHERE MS.Id = @id');
                returnEntity = result.recordsets[0][0];
        }catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    static insert = async(movie) => {
        let returnEntity = null;
        const {Id, Image, Title, ReleaseDate, Rating} = movie;
        let pool = await sql.connect(config);
        try {
            const request = new sql.Request(pool);

            returnEntity = request
            .input('Image', sql.VarChar, Image)
            .input('Title', sql.VarChar, Title)
            .input('ReleaseDate', sql.Date, ReleaseDate)
            .input('Rating', sql.Float, Rating)
                .query('INSERT INTO [Movies&Shows] (Image, Title, ReleaseDate, Rating) VALUES (@Image, @Title, @ReleaseDate, @Rating)')
        } catch(error) {
            console.log(error);
        }
        return returnEntity;
    }

    static update = async(movie) => {
        let returnEntity = null;
        const {Id, Image, Title, ReleaseDate, Rating} = movie;
        let pool = await sql.connect(config);
        try {
            const request = new sql.Request(pool);

            returnEntity = request
            .input('Id', sql.Int, Id)
            .input('Image', sql.VarChar, Image)
            .input('Title', sql.VarChar, Title)
            .input('ReleaseDate', sql.Date, ReleaseDate)
            .input('Rating', sql.Float, Rating)
                .query('UPDATE [Movies&Shows] SET Image = @Image, Title = @Title, ReleaseDate = @ReleaseDate, Rating = @Rating WHERE Id = @Id')
        } catch(error) {
            console.log(error);
        }
        return returnEntity;
    }

    static delete = async(Id) => {
        let returnEntity = null;
        let pool = await sql.connect(config);
        try {
            const request = new sql.Request(pool);

            returnEntity = request
            .input('Id', sql.Int, Id)
                .query('UPDATE [Movies&Shows] SET Image = @Image, Title = @Title, ReleaseDate = @ReleaseDate, Rating = @Rating WHERE Id = @Id')
        } catch(error) {
            console.log(error);
        }
        return returnEntity;
    }
}