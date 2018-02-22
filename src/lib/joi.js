import Joi from 'joi';
import mongoose from 'mongoose';

export default Joi.extend(joi => ({
  base: joi.string(),
  name: 'string',
  language: {
    objectId: 'needs to be a ObjectId'
  },
  coerce(value, state, options) {
    if (value instanceof mongoose.Types.ObjectId) {
      return value.toString();
    }
    return value;
  },
  rules: [
    {
      name: 'objectId',
      validate(params, value, state, options) {
        if (mongoose.Types.ObjectId.isValid(value)) {
          return value;
        }
        return this.createError(
          'string.objectId',
          { v: value },
          state,
          options
        );
      }
    }
  ]
}));
