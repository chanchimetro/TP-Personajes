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
    static insert = async(character) => {
        let returnEntity = null;
        console.log(character);
        const {Id, Image, Name, Age, Weight, History} = character;
        let pool = await sql.connect(config);

            const request = new sql.Request(pool);

            returnEntity = request
            .input('Image', sql.NVarChar(4000), Image)
            .input('Name', sql.NVarChar(50), Name)
            .input('Age', sql.Int, Age)
            .input('Weight', sql.Float, Weight)
            .input('History', sql.NVarChar(4000), History)
            .query('INSERT INTO Characters (Image, Name, Age, Weight, History) VALUES (@Image, @Name, @Age, @Weight, @History)')
        return returnEntity;
    }
    static update = async(character) => {
        let returnEntity = null;
        const {Id, Image, Name, Age, Weight, History} = character;
        let pool = await sql.connect(config);
        try{
            const request = new sql.Request(pool);

            returnEntity = request
            .input('Id', sql.Int, Id)
            .input('Image', sql.NVarChar(4000), Image)
            .input('Name', sql.NVarChar(50), Name)
            .input('Age', sql.Int, Age)
            .input('Weight', sql.Float, Weight)
            .input('History', sql.NVarChar(4000), History)
                .query('UPDATE Characters SET Image = @Image, Name = @Name, Age = @Age, Weight = @Weight, History = @History WHERE Id = @Id');
        }catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    static delete = async(id) => {
        let returnEntity = null;
        try{
            const request = new sql.Request(pool);
            returnEntity = request
            .input('Id', sql.Int, id)
                .query('DELETE from Characters WHERE Id = @Id ');
        }catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    static getCharInfo = async(id) => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('Id', sql.Int, id)
                .query('SELECT C.*, MS.* FROM Characters C INNER JOIN [CharacterXMovies&Shows] X ON C.Id = X.fkCharacter INNER JOIN [Movies&Shows] MS ON MS.Id = X.fkMovieOrShow WHERE C.Id = 1');
                returnEntity = result.recordsets[0][0];
        }catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    static getCharByName = async(Name) => {
        let returnEntity = null;
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('Name', sql.Int, Name)
                .query('SELECT * FROM Characters WHERE Name = @Name');
                returnEntity = result.recordsets[0][0];
        }catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}