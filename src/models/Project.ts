import moongose from 'mongoose';

export const ProjectSchema = moongose.model('Project', new moongose.Schema({
   name: {
      type: String,
   },
   description: {
      type: String,
   },
   status: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Completed'],
   },
   clientId: {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Client',
   }
}));