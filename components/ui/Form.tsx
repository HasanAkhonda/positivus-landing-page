'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import decorForm from '../../assets/pics/contact-pic.png';

export default function  Form() {
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (checkbox2) {
      setMessage("We're interested in your services! Please contact us");
    } else {
      setMessage('Hi!');
    }
  }, [checkbox1, checkbox2]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden">
      <form
        className="bg-gray sm:p-6 h-full w-full lg:max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-[35px] sm:items-center mb-10">
          <div className="flex items-center gap-[14px]">
            <input
              type="checkbox"
              id="checkbox1"
              checked={checkbox1}
              onChange={() => {
                setCheckbox1(true);
                setCheckbox2(false);
              }}
              className="form-checkbox text-black"
            />
            <label htmlFor="checkbox1" className="text-black">
              Say Hi
            </label>
          </div>
          <div className="flex items-center gap-[14px]">
            <input
              type="checkbox"
              id="checkbox2"
              checked={checkbox2}
              onChange={() => {
                setCheckbox2(true);
                setCheckbox1(false);
              }}
              className="form-checkbox text-black"
            />
            <label htmlFor="checkbox2" className="text-black">
              Get a Quote
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-black mb-2">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-black mb-2">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"
          />
        </div>

        <button type="submit" name="submit" className="btn-primary w-full">
          Send
        </button>
      </form>

      <div className="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block">
        <Image src={decorForm} alt="decor" />
      </div>

      {/* Custom checkbox style */}
      <style jsx>{`
        .form-checkbox {
          appearance: none;
          width: 28px;
          height: 28px;
          border: 1px solid #000;
          border-radius: 50%;
          outline: none;
          cursor: pointer;
          position: relative;
        }

        .form-checkbox:before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          background: var(--green);
          transform: scale(0);
          transition: transform 0.1s ease-in-out;
        }

        .form-checkbox:checked:before {
          transform: scale(0.6);
        }
      `}</style>
    </div>
  );
}
