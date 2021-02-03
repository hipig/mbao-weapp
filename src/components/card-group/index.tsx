import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

export default class CardGroup extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View className='bg-pink-500 p-2 rounded-xl mb-5'>
        <View className='relative bg-white rounded-xl'>
          <View className='absolute top-0 left-0 rounded-br-xl bg-pink-500 pb-2 pl-1 pr-4 text-sm text-white'>尚未开始</View>
          <View className='flex items-center justify-between'>
            <View className='flex-1 px-3'>
              <View className='flex flex-col'>
                <View>
                  <Text className='inline-block text-xl py-1 border-l-0 border-r-0 border-yellow-500 border-solid text-pink-400 font-semibold'>Animals</Text>
                </View>
                <View className='mt-4 text-3xl font-extrabold text-pink-500'>动物</View>
              </View>
            </View>
            <View className='p-1'>
              <Image src='http://dvoyage.oss-cn-shenzhen.aliyuncs.com/ChildLiteracyCard_动物.png' className='w-40 h-40'></Image>
            </View>
          </View>
        </View>
      </View>
    )
  }
}