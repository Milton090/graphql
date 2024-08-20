import { GraphQLEnumType, GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { ClientType } from "./clients/type";
import { ProjectType } from "./projects/type";
import { ClientSchema as Client } from "../models/Client";
import { ProjectSchema as Project } from "../models/Project";


export const mutation = new GraphQLObjectType({
   name: 'Mutation',
   fields: {

      addClient: {
         type: ClientType,
         args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            email: { type: GraphQLNonNull(GraphQLString) },
            phone: { type: GraphQLNonNull(GraphQLString) },
         },
         resolve: (_: unknown, args: { [argName: string]: any }) => {
            const client = new Client({
               name: args.name,
               email: args.email,
               phone: args.phone,
            });
            return client.save();
         }
      },

      deleteClient: {
         type: ClientType,
         args: {
            id: { type: GraphQLNonNull(GraphQLString) },
         },
         resolve: (_: unknown, args: { [argName: string]: any }) => {
            return Client.findByIdAndDelete(args.id);
         }
      },



      addProject: {
         type: ProjectType,
         args: {
            name: { type: GraphQLNonNull(GraphQLString) },
            description: { type: GraphQLNonNull(GraphQLString) },
            status: {
               type: new GraphQLEnumType({
                  name: 'ProjectStatus',
                  values: {
                     'new': { value: 'Not Started' },
                     'progress': { value: 'In Progress' },
                     'completed': { value: 'Completed' },
                  }
               }),
               defaultValue: 'Not Started'
            },
            clientId: { type: GraphQLNonNull(GraphQLID) },
         },
         resolve: (_: unknown, args: { [argName: string]: any }) => {
            const project = new Project({
               name: args.name,
               description: args.description,
               status: args.status,
               clientId: args.clientId,
            });
            return project.save();
         }
      },

      updateProject: {
         type: ProjectType,
         args: {
            id: { type: GraphQLNonNull(GraphQLString) },
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            status: {
               type: new GraphQLEnumType({
                  name: 'ProjectStatusUpdate',
                  values: {
                     'new': { value: 'Not Started' },
                     'progress': { value: 'In Progress' },
                     'completed': { value: 'Completed' },
                  }
               }),
            },
         },
         resolve: (_: unknown, args: { [argName: string]: any }) => {
            return Project.findByIdAndUpdate(args.id, args, { new: true });
         }
      },

      deleteProject: {
         type: ProjectType,
         args: {
            id: { type: GraphQLNonNull(GraphQLString) },
         },
         resolve: (_: unknown, args: { [argName: string]: any }) => {
            return Project.findByIdAndDelete(args.id);
         }
      },
   }
});