import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/* eslint-disable react/prop-types */
const DesktopImageCard = ({ image }) => {
  return (
    <div className="rounded shadow-lg mt-2 mx-auto max-w-xs">
      <div className="h-40 overflow-hidden">
        <LazyLoadImage
          src={image.url}
          alt={image.name}
          effect="blur"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="pl-4 py-2">
        <p className="text-gray-700 text-sm truncate">{image.name}</p>
        <a
          href={`https://raw.githubusercontent.com/saumil8200/canva-walls/main/desktop/${image.name}`}
          download={image.name}
          className="text-blue-500 text-sm hover:underline"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default DesktopImageCard;
