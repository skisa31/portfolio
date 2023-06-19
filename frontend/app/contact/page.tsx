"use client";

import Header from "../header";
import Footer from "../footer";
import InputFiled from "../components/InputField";
import TextareaField from "../components/TextareaField";
import ReturnTop from "../components/ReturnTop";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type ContactForm = {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup.string().email('メールアドレスの形式で入力してください').required('必須項目です'),
  message: yup.string().required('必須項目です'),
})

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const res = await fetch('api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      alert('送信しました');
    } else {
      alert('送信に失敗しました');
    };
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div>
        <ReturnTop />
      </div>
      <div className='max-w-6xl mx-auto font-roboto'>
        <div className='text-4xl mx-auto pt-10 text-center'>
          <h1>Contact</h1>
        </div>
        <div className='grid grid-cols-3 gap-4 mx-auto pt-10 text-center'>
          <div className="col-span-3">
            <h2 className="text-3xl">SNS</h2>
          </div>
          <div className="col-span-1 flex">
            <div className="pr-4">
              <AiFillTwitterCircle size={32} />
            </div>
            <a href="https://github.com/skisa31" target="_brank" rel="noopener noreferrer" className="flex-1 text-xl text-left hover:underline hover:cursor-pointer">
              @shk4346
            </a>
          </div>
          <div className="col-span-1 flex">
            <div className="pr-4">
              <AiFillGithub size={32} />
            </div>
            <a href="https://github.com/skisa31" target="_brank" rel="noopener noreferrer" className="flex-1 text-xl text-left hover:underline hover:cursor-pointer">
              github/skisa31
            </a>
          </div>
          <div className="col-span-1 flex">
            <div className="pr-4">
              <AiFillInstagram size={32} />
            </div>
            <a href="https://www.instagram.com/s.ski_31/" target="_brank" rel="noopener noreferrer" className="flex-1 text-xl text-left hover:underline hover:cursor-pointer">
              s.ski_31
            </a>
          </div>
        </div>
        <div className='text-2xl mx-auto pt-10 text-center'>
          <p className="font-notoSansJp">お問い合わせ</p>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="pt-4">
                <InputFiled label="お名前" error={errors.name?.message} register={register('name')} required />
              </div>
            </form>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="pt-4">
                <InputFiled label="メールアドレス" error={errors.email?.message} register={register('email')} required />
              </div>
            </form>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="pt-4">
                <TextareaField label="お問い合わせ内容" error={errors.message?.message} register={register('message')} required />
              </div>
            </form>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="py-4">
                <button type="submit" className=" border border-black w-32 bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded">
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Contact;