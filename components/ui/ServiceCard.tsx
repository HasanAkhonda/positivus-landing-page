import Image from 'next/image';
 import Card  from './card';
import gob from '../../assets/icon6.svg'; // green on black icon
import wob from '../../assets/icon7.svg'; // white on black icon

interface ServiceCardProps {
  index: number;
  titleTop: string;
  titleBottom: string;
  img: any; // StaticImageData from next/image import
  alt: string;
  link: string;
}

export default function ServiceCard({
  index,
  titleTop,
  titleBottom,
  img,
  alt,
  link,
}: ServiceCardProps) {
 const bgColorClass =
  (index === 1 || index === 4) ? 'bg-gray' : 
  (index === 2 || index === 5) ? 'bg-green' : 
  'bg-dark  ';

  const textClass = 
  index === 1 ? 'greenhead' : 
  index === 4 ? 'greenhead' :
   'whitehead';

  const icon = index === 1 || index === 2 ? gob : wob;

  return (
    <Card isUnderline={true}>
      <div
        className={`h-[300px] w-full sm:h-full lg:gap-[60px] grid custom-grid lg:grid-cols-2 lg:grid-rows-1 p-8 sm:p-[50px] rounded-[45px] ${bgColorClass}`}
      >
        <h3 className="flex flex-col col-span-2 lg:col-span-1">
          <span className={`w-fit ${textClass}`}>{titleTop}</span>
          <span className={`w-fit ${textClass}`}>{titleBottom}</span>
        </h3>

        <div className="w-full h-full row-span-1 order-1 lg:order-none lg:row-span-2 flex justify-center items-center">
          <Image
            src={img}
            alt={alt}
            className="h-[100px] w-auto sm:h-auto sm:w-3/4 object-cover"
          />
        </div>

        <div className="flex items-end">
          <a href={link} className="flex items-center gap-3.5">
            <Image src={icon} alt={alt} />
            <span className="hidden sm:block">Service Info</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .custom-grid {
          grid-template: auto auto;
        }
      `}</style>
    </Card>
  );
}
