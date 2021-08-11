import gql from 'graphql-tag';

export default gql`
    mutation createJob( $title: String!, $description: String!) {
        createJob( attributes: {
            title: $title
            description: $description
        }
    ) {
      id
    }
  }
`;
