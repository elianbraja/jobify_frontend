// PrivateRoute.js
import { Route, Redirect } from 'react-router-dom';
import CURRENT_USER from './queries/user/CurrentUser'
import { useQuery } from '@apollo/react-hooks';

const PrivateRoute = ({ component: Component, ...rest }) =>{
const {loading: loading, data: data} = useQuery(CURRENT_USER)
return(
  <div>
  {!loading ?
  <Route
    {...rest}
    render={props =>
      data ?
        // <Layout user={data}>
        //   <Component {...props}/>
        // </Layout>
      :
      <Redirect to={{pathname: '/login'}}/>
    }
  />
  :
  null}
  </div>
)};

export default PrivateRoute;
