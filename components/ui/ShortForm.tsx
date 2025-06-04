'use client';

import React, { useState } from 'react';

export default function ShortForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can send `email` to your API or handle it here
    console.log('Subscribed with:', email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#292A32] px-10 py-14 rounded-[14px] gap-5 h-full flex flex-col sm:flex-row items-center justify-center"
    >
      <div className="w-full sm:w-[55%]">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          className="bg-transparent w-full px-[35px] py-5 border rounded-[14px] focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        name="submit"
        className="w-full sm:w-[45%] btn-tertiary"
      >
        Subscribe to news
      </button>
    </form>
  );
}
