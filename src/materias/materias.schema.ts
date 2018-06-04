import * as Joi from 'joi';
export const MATERIA_SCHEMA = Joi
    .object()
    .keys({
        codigo:Joi.number().required(),
        nombre: Joi.string().regex(/^[a-zA-Z.,' ' ]{4,30}$/).required(),
        descripcion:Joi.string().regex(/^[a-zA-Z0-9 ]{4,30}$/).required(),
        activo:Joi.boolean().required(),
        fechaCreacion:Joi.date().required(),
        numeroHorasSemana:Joi.number().integer().required(),
        estudianteId:Joi.number().integer().required(),
    });