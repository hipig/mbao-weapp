import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

export default class CardGroup extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View className='card-group card-group-pink'>
        <View className='card-group__box'>
          <View className='card-group__box-status'>尚未开始</View>
          { this.props.title }
        </View>
      </View>
    )
  }
}