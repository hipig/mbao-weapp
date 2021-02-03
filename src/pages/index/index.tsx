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
      <View className='font-sans w-full px-4'>
        <View className='py-1'>
          {
            cardGroups.map((item, index) => {
              return (
                <CardGroup title={ item }></CardGroup>
              )
            })
          }
        </View>
      </View>
    )
  }
}
