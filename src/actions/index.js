export function siginUser( { email, password }) {
  return function(dispatch) {
    //submit email and password to server
        

    // if request is good.
    // - Update state to indicate user is authenticated
    // - Save JWT token
    // - redirect to the route '/feature'

    // if bad reqest
    // - show an error to the user
  }
}


// redux thunk allows us to dispatch a function instead of an action.
// The function is automatically called with the dispatch method
