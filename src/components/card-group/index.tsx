import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

export default class CardGroup extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View className='bg-white border-4 border-pink-500 border-solid rounded-xl mb-5'>
        <View className='relative'>
          <View className='absolute top-0 left-0 rounded-br-xl bg-pink-500 pb-2 pt-1 pl-1 pr-4 text-sm text-white'>尚未开始</View>
          <View className='flex items-center justify-between'>
            <View className='flex-1 px-4'>
              <View className='flex flex-col'>
                <View className='py-2'>
                  <Text className='inline-block text-xl text-pink-400 font-semibold'>Animals</Text>
                </View>
                <View className='mt-2 text-3xl font-extrabold text-pink-500'>动物</View>
              </View>
            </View>
            <View className='p-2'>
              <Image src='http://dvoyage.oss-cn-shenzhen.aliyuncs.com/ChildLiteracyCard_动物.png' className='w-36 h-36'></Image>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
