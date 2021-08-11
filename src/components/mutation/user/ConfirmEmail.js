import gql from 'graphql-tag';

export default gql`
mutation confirmEmail($token: String!) {
  confirmEmail(emailToken: $token) {
    success
  }
}
`;
