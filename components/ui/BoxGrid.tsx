import Card from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

interface InsightItem {
  title: string;
  desc: string;
}

interface BoxGridProps {

  items: InsightItem[];
  linkText?: string;
  linkHref?: string;
  icon?: StaticImageData;
}

const BoxGrid = ({

  items,
  linkText = 'Learn More',
  linkHref = '/page-here',
  icon,
}: BoxGridProps) => {
  return (

    <div>
      {/* Mobile View */}
      <div className="sm:hidden space-y-6">
        {items.map((item, idx) => (
          <Card key={idx} isUnderline={true}>
            <ServiceCard {...item} linkText={linkText} linkHref={linkHref} icon={icon} />
          </Card>
        ))}
      </div>

      {/* Desktop Grid View */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x border rounded-xl overflow-hidden">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`border-b ${idx >= 3 ? 'border-t' : ''} last:border-b-0`}
          >
            <Card isUnderline={false}>
              <ServiceCard {...item} linkText={linkText} linkHref={linkHref} icon={icon} />
            </Card>
          </div>
        ))}
      </div>
    </div>

  );
};

const ServiceCard = ({
  title,
  desc,
  linkText,
  linkHref,
  icon,
}: InsightItem & { linkText: string; linkHref: string; icon?: StaticImageData }) => (
  <div className="space-y-6 p-6">
    <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
    <p className="text-sm md:text-lg max-w-sm">{desc}</p>
    <div className="flex items-end">
      <a href={linkHref} className="flex items-center gap-3.5">
        {icon && <Image src={icon} alt="icon" />}
        <span className="hidden sm:block">{linkText}</span>
      </a>
    </div>
  </div>
);

export default BoxGrid;
