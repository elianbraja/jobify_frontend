import gql from 'graphql-tag';

export default gql`
    query JobsQuery {
        jobs {
            id
            title
            description
        }
    }
`;
