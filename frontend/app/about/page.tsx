"use client"

import Header from '../header'
import Footer from '../footer'
import ReturnTop from '../components/ReturnTop'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex flex-col pb-6'>
      <div>
        <ReturnTop />
      </div>
      <div className='max-w-6xl mx-auto font-notoSansJp'>
        <div className='text-4xl mx-auto pt-10 text-center font-roboto'>
          <h1>About</h1>
        </div>
        <div className='text-center pt-10'>
          <h2 className='text-3xl'>Profile</h2>
        </div>
        <div className='grid grid-cols-3 pt-6'>
          <div className='col-span-1 flex items-center justify-center'>
            <div>
              <Image
                src='/profile.jpg'
                width={200}
                height={200}
                alt='プロフィール画像'
                className='rounded-lg'
              />
            </div>
          </div>
          <div className='col-span-2 flex'>
            <div className='grid grid-cols-2'>
              <div className='col-span-1 text-4xl text-left justify-center'>
                <div className='text-center'>
                  酒井 翔伎
                </div>
                <div className='text-center text-2xl text-gray-500 font-roboto'>
                  SAKAI Shoki
                </div>
              </div>
              <div className='col-span-1 flex'>
              </div>
              <div className='col-span-2'>
                <div className='text-xl text-gray-500 font-roboto align-text-bottom'>
                  静岡大学大学院 総合科学技術研究科情報学専攻 修士2年
                </div>
                <div className='text-xl text-gray-500 font-roboto align-text-bottom'>
                  静岡県浜松市在住
                </div>
                <div className='text-xl text-gray-500 font-roboto align-text-bottom'>
                  1999/10/31生まれ 23歳
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
