import gql from 'graphql-tag';

export default gql`
{
  currentUser {
    id
    token
    email
    firstName
    lastName
    code
  }
}
`;
