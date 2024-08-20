import { GraphQLID, GraphQLList } from 'graphql';
import { ClientType } from './type';
import { ClientSchema as Client } from '../../models/Client';


export const ClientQueries = {
   clients: {
      type: new GraphQLList(ClientType),
      resolve() {
         return Client.find();
      }
   },
   client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(_: any, args: { [argName: string]: any }) {
         return Client.findById(args.id);
      }
   }
};
