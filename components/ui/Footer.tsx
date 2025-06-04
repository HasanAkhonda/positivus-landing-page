import Image from 'next/image';
import Facebook from '../../assets/pics/Social icon.svg';
import Linkedin from '../../assets/linkedin.svg';
import Logo from '../../assets/logo-alt.svg';
import Twitter from '../../assets/twitter.svg';
import ShortForm from '../ui/ShortForm';

const logos = [
  { name: 'Facebook', src: Facebook, link: 'https://facebook.com' },
  { name: 'Linkedin', src: Linkedin, link: 'https://linkedin.com' },
  { name: 'Twitter', src: Twitter, link: 'https://twitter.com' },
];

const links = [
  { name: 'About us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Use Cases', href: '/cases' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
];


export default function Footer() {
  return (
    <section className="sm:px-5 container font-[Grotesk] ">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="px-[15px] bg-dark text-gray py-[55px] lg:px-[60px] sm:rounded-t-[45px]">
          <div className="flex flex-col lg:flex-row gap-7 items-center justify-between">
            <a href="#home">
              <Image src={Logo} alt="Logo for Kreatif Brand" />
            </a>

            <ul className="flex flex-col sm:flex-row gap-5">
              {links.map((link) => (
                <li key={link.name} className="text-center">
                  <a className="underline" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex gap-5">
              {logos.map((logo) => (
                <li key={logo.name}>
                  <a href={logo.link} target="_blank" rel="noopener noreferrer">
                    <Image src={logo.src} alt={logo.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col lg:flex-row mt-[66px] mb-[51px]">
            <div className="flex text-center lg:text-start flex-col w-full lg:w-[30%]">
              <h3 className="mb-5 text-center md:text-left text-2xl text-green">Contact us</h3>
              <div className="flex flex-col justify-between gap-4">
                <span>Email: examplemail.com</span>
                <span>Phone: +123 456 789</span>
                <span className="lg:w-3/4">
                  Address: 1234 Street Name, City Name, Country Name
                </span>
              </div>
            </div>

            <div className="flex-grow my-10 lg:my-0 lg:ml-12">
              <ShortForm />
            </div>
          </div>

          <div className="h-[1px] bg-gray mb-5" />
          <div className="flex flex-col lg:flex-row h-20 justify-center mt-4 text-center md:justify-between md:mt-0">
            <span>
              2025 Positivus – Made With{' '}
              <a className="underline" target="_blank" rel="noopener noreferrer" href=" https://nextjs.org/">
                Next.Js
              </a>{' '}
              by{' '}
              <a className="underline" target="_blank" rel="noopener noreferrer" href="https://github.com/HasanAkhonda">
                md
              </a>
            </span>

            <span>
              Credits (
              <a className="underline" href="https://www.backbencherstudio.com" target="_blank" rel="noopener noreferrer">
                BBS
              </a>
              ,{' '}
              <a
                className="underline"
                href="https://esteban-vasquez.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VisionCraft
              </a>
              ) &{' '}
              <a
                className="underline"
                href="https:// "
                target="_blank"
                rel="noopener noreferrer"
              >
                Licence
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
