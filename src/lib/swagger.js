import joiSwagger from 'koa-joi-swagger';

const { Joi } = joiSwagger;
export const validateErrorHandler = ctx => {};

export const converter = {
  mergeJsonWithObject: (basicJson, objToMerge) => {
    return basicJson.concat(
      Joi.object()
        .json()
        .keys(objToMerge)
    );
  },

  mergeJoiJsonWithJoiJson: (basicJson, jsonToMerge) => {
    return basicJson.concat(jsonToMerge);
  },

  convertObjToJoiSchema: obj => {
    return Joi.object().keys(obj);
  },

  convertJoiJsonToJoiSchema: (key, jsonSchema) => {
    let temp = {};
    temp[key] = jsonSchema;
    return Joi.object().keys(temp);
  }
};

export const Err = Joi.object()
  .json()
  .keys({
    code: Joi.string(),
    message: Joi.string(),
    data: Joi.object()
  });
