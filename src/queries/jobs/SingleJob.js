import gql from 'graphql-tag';

export default gql`
    query SpecificJobQuery($id: ID!) {
        jobs(id: $id) {
            id
            title
            description
        }
   }
`;
