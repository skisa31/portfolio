'use client';

import Header from '../header'
import Footer from '../footer'
import ReturnTop from '../components/ReturnTop'
import Presentations from '../components/Presentations';
import Proceedings from '../components/Proceedings';

const Article = () => {
  return (
    <div className='flex pb-6'>
      <div>
        <ReturnTop />
      </div>
      <div className='max-w-6xl mx-auto font-notoSansJp'>
        <div className='text-4xl mx-auto pt-10 text-center font-roboto'>
          <h1>Articles</h1>
        </div>
        <div className='pt-10 mx-auto flex flex-col'>
          <h2 className='text-3xl text-center font-roboto'>
            Presentations
          </h2>
          <div className='pt-4'>
            <Presentations title='インタラクティブなモデルベース回想法を実現する対話インタフェースの実装に向けた分析' date='2021/09/03-05' confName='2021年度日本認知科学会第38回大会' url='https://www.jcss.gr.jp/meetings/jcss2021/' />
          </div>
          <hr className="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
          <div>
            <Presentations title='モデルベース回想法における音声インタフェースの導入に向けた語りからの感情推定' date='2021/11/27' confName='第19回情報学ワークショップ' url='https://sites.google.com/view/winf2021/home?authuser=0' />
          </div>
          <hr className="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
          <div>
            <Presentations title='記憶回想時に生成される発話からのユーザモデルパラメータの推定' date='2022/03/02-03' confName='HAIシンポジウム2022' url='https://hai-conference.net/symp2022/' />
          </div>
          <hr className="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
          <div className='font-roboto'>
            <Presentations title='Estimating Personal Model Parameters from Utterances in Model-based Reminiscence' date='2022/10/18-21' confName='10TH INTERNATIONAL CONFERENCE ON AFFECTIVE COMPUTING & INTELLIGENT INTERACTION (ACII 2022)' url='https://acii-conf.net/2022/' />
          </div>
        </div>
        <div className='pt-10 mx-auto flex flex-col'>
          <h2 className='text-3xl text-center font-roboto'>
            Proceedings
          </h2>
          <div className='pt-4'>
            <Proceedings confType='国内' title='インタラクティブなモデルベース回想法を実現する対話インタフェースの実装に向けた分析' authors='酒井翔伎, 森田純哉' date='2021年9月' confName='2021年度日本認知科学会第38回大会' url='https://www.jcss.gr.jp/meetings/jcss2021/proceedings/pdf/JCSS2021_P2-21F.pdf' />
          </div>
          <hr className="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
          <div>
            <Proceedings confType='国内' title='記憶回想時に生成される発話からのユーザモデルパラメータの推定' authors='酒井翔伎, 森田純哉' date='2022年3月' confName='HAIシンポジウム2022' url='https://hai-conference.net/proceedings/HAI2022/html/paper/paper-G-9.html' />
          </div>
          <hr className="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
          <div>
            <Proceedings confType='国際' title='Estimating Personal Model Parameters from Utterances in Model-based Reminiscence' authors='Shoki Sakai, Kazuki Itabasi, Junya Morita' date='Oct. 2022' confName='10TH INTERNATIONAL CONFERENCE ON AFFECTIVE COMPUTING & INTELLIGENT INTERACTION (ACII 2022)' url='https://www.computer.org/csdl/proceedings-article/acii/2022/09953877/1IAJZXdnOrS' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;