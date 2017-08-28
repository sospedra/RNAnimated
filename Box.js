import React from 'react'
import PropTypes from 'prop-types'
import { Animated, Button, View } from 'react-native'

class Box extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      position: new Animated.Value(0),
    }
  }

  move () {
    return () => {
      Animated.timing(this.state.position, {
        toValue: this.state.position._value === 0 ? 100 : 0,
        duration: 230,
      }).start()
    }
  }

  render () {
    return (
      <View>
        <Button onPress={this.move()} title='Move the box' />
        <Animated.View style={{
          left: this.state.position,
          backgroundColor: 'cadetblue',
          height: 100,
          width: 100,
        }} />
      </View>
    )
  }
}

export default Box
