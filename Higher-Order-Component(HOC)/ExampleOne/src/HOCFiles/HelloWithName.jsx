import Hello from './Hello'

function welcome(Component) {
  return function EnhancedHello(props) {
    return (
      <>
        {/* Return the props value */}
        {props.name !== '' && <Component name="Learner Bro" {...props} />}

        {/* Return 'GUEST' at all times */}
        {props.name === '' && <Component {...props} name="Learner Bro" />}
      </>
    )
  }
}

const HelloWithName = welcome(Hello)

export default HelloWithName
