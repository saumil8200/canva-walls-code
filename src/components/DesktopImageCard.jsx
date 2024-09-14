import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/* eslint-disable react/prop-types */
const DesktopImageCard = ({ image }) => {
  return (
    <div className="rounded shadow-lg mt-2 mx-auto">
      <div className="h-60">
        <LazyLoadImage
          src={image.url}
          alt={image.name}
          effect="blur"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="pl-4 py-2">
        <p className="text-gray-700 text-sm">{image.name}</p>
        <a
          href={image.url}
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
