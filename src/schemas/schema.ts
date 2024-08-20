import { GraphQLFieldConfigMap, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { ClientQueries } from './clients/query';
import { ProjectQueries } from './projects/query';
import { mutation } from './mutations';

// Combinar las consultas en un solo objeto
const fields: GraphQLFieldConfigMap<any, any> = {
   ...ClientQueries,
   ...ProjectQueries
};

const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
   fields,
});


// Definir el esquema
export const schema = new GraphQLSchema({
   query: RootQuery,
   mutation,
});
