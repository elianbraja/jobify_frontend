import gql from 'graphql-tag';

export default gql`
    mutation updateJob( $jobId: ID!, $title: String!, $description: String!) {
        updateJob(attributes: {
            title: $title
            description: $description
        }, jobId: $jobId) {
      id
    }
  }
`;
