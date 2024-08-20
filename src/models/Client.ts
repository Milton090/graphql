import moongose from 'mongoose';

export const ClientSchema = moongose.model('Client', new moongose.Schema({
   name: {
      type: String,
   },
   email: {
      type: String,
   },
   phone: {
      type: String,
   }
}));