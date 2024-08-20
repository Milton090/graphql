import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { ClientType } from "../clients/type";
import { ProjectI } from "./interface";
import { ClientSchema as Client } from "../../models/Client";


export const ProjectType = new GraphQLObjectType({
   name: 'Project',
   fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      status: { type: GraphQLString },
      client: {
         type: ClientType,
         resolve(parent: ProjectI) {
            return Client.findById(parent.clientId);
         }
      },
   })
});