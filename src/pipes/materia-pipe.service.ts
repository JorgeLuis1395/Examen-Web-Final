import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionIncorrectaException} from "../exceptions/peticion-incorrecta.exception";
import * as Joi from 'joi';
@Injectable()
export class MateriaPipe implements PipeTransform{
    constructor (private readonly _schema){
    }
    transform(jsonValidarMateria: any, metadata: ArgumentMetadata){
        const  {error}= Joi.validate(jsonValidarMateria, this._schema)
        if(error){
            //botar un error
            throw  new PeticionIncorrectaException(
                {
                    erorr: error,
                    mensaje: 'Json de Materia no valido',
                },
                10
            )
        } else{
            return jsonValidarMateria;
        }
    }
}