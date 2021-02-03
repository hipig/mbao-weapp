import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { CardGroup } from '@components'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cardGroups: [1, 2, 3]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let { cardGroups } = this.state

    return (
      <View className='w-full px-4'>
        <Text>Hello world!</Text>
        {
          cardGroups.map((item, index) => {
            return (
              <CardGroup title={ item }></CardGroup>
            )
          })
        }
      </View>
    )
  }
}
