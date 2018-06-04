import * as Joi from 'joi';
export const ESTUDIANTE_SCHEMA = Joi
    .object()
    .keys({
        nombres:Joi.string().regex(/^[a-zA-Z]{2,30}$/),
        apellidos: Joi.string().regex(/^[a-zA-Z]{2,30}$/).required(),
        fechaNacimiento:Joi.date().required(),
        semestreActual:Joi.number().integer().min(0).max(8).required(),
        graduado:Joi.boolean().required(),
    });
