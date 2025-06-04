
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cases = () => {
  return (
    <section className="w-full bg-white text-black py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg md:text-xl text-gray-600">Real results from our satisfied partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Case Study Item */}
          <div className="border border-gray-200 p-6 rounded-xl hover:shadow-xl transition">
            <Image
              src="/pics/hero.svg"
              alt="Case 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">How We Boosted XYZ Co’s Conversions</h3>
            <p className="text-gray-600 mb-4">
              Learn how our tailored strategy led to a 150% increase in online leads.
            </p>
            <Link href="/case-studies/xyz">
              <span className="text-purple-600 font-medium hover:underline">Read More →</span>
            </Link>
          </div>
          {/* Case Study Item */}
          <div className="border border-gray-200 p-6 rounded-xl hover:shadow-xl transition">
            <Image
              src="/pics/hero.svg"
              alt="Case 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">How We Boosted XYZ Co’s Conversions</h3>
            <p className="text-gray-600 mb-4">
              Learn how our tailored strategy led to a 150% increase in online leads.
            </p>
            <Link href="/case-studies/xyz">
              <span className="text-purple-600 font-medium hover:underline">Read More →</span>
            </Link>
          </div>
          {/* Case Study Item */}
          <div className="border border-gray-200 p-6 rounded-xl hover:shadow-xl transition">
            <Image
              src="/pics/hero.svg"
              alt="Case 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">How We Boosted XYZ Co’s Conversions</h3>
            <p className="text-gray-600 mb-4">
              Learn how our tailored strategy led to a 150% increase in online leads.
            </p>
            <Link href="/case-studies/xyz">
              <span className="text-purple-600 font-medium hover:underline">Read More →</span>
            </Link>
          </div>
          {/* Case Study Item */}
          <div className="border border-gray-200 p-6 rounded-xl hover:shadow-xl transition">
            <Image
              src="/pics/hero.svg"
              alt="Case 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">How We Boosted XYZ Co’s Conversions</h3>
            <p className="text-gray-600 mb-4">
              Learn how our tailored strategy led to a 150% increase in online leads.
            </p>
            <Link href="/case-studies/xyz">
              <span className="text-purple-600 font-medium hover:underline">Read More →</span>
            </Link>
          </div>
          {/* Case Study Item */}
          <div className="border border-gray-200 p-6 rounded-xl hover:shadow-xl transition">
            <Image
              src="/pics/hero.svg"
              alt="Case 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">How We Boosted XYZ Co’s Conversions</h3>
            <p className="text-gray-600 mb-4">
              Learn how our tailored strategy led to a 150% increase in online leads.
            </p>
            <Link href="/case-studies/xyz">
              <span className="text-purple-600 font-medium hover:underline">Read More →</span>
            </Link>
          </div>

          {/* More items can be added the same way */}
        </div>
      </div>
    </section>
  );
};

export default Cases;

 