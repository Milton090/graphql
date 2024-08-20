import { GraphQLID, GraphQLList } from 'graphql';
import { ProjectType } from './type';
import { ClientType } from '../clients/type';
import { ProjectI } from './interface';
import { ProjectSchema as Project } from '../../models/Project';
import { ClientSchema as Client } from '../../models/Client';



export const ProjectQueries = {
   projects: {
      type: new GraphQLList(ProjectType),
      resolve() {
         return Project.find();
      }
   },
   project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } }, //id es el nombre del parametro que se pasa al realizar la consulta
      resolve(_: unknown, args: { [argName: string]: any }) {
         return Project.findById(args.id);
      }
   },
   client: {
      type: ClientType,
      resolve(parent: ProjectI) {
         return Client.findById(parent.clientId);
      }
   }
};
