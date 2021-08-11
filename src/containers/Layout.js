import React from 'react'
import PropTypes from 'prop-types'

const Layout = props => {
    const { user, children } = props;
    return (
        <>
            <div>
                {user.token ? '' : <div>Login</div>}
                {user.token ? <div>Logout</div> : ''}
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

Layout.propTypes = {

}

export default Layout
