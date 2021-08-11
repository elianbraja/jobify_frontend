import gql from "graphql-tag";

export default gql`
mutation createUser( $email:String!, $password:String!, $password_confirmation:String!, $first_name:String!, $last_name:String!){
  createUser( attributes: {
    email:$email
    password:$password
    passwordConfirmation:$password_confirmation
    firstName:$first_name
    lastName:$last_name}
  ){
    id
  }
}
`;
