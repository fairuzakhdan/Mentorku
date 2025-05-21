import { AspectRatio } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Ratio = ({ link, title }) => {
  const getEmbedLink = (url) => {
    if (!url || typeof url !== 'string') return null;

    if (url.includes('youtu.be/')) {
      return 'https://www.youtube.com/embed/' + url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('watch?v=')) {
      return 'https://www.youtube.com/embed/' + url.split('watch?v=')[1].split('&')[0];
    }
    return null;
  };

  const embedLink = getEmbedLink(link);

  if (!embedLink) return null;
  return (
    <AspectRatio w="full" height={450} ratio={1}>
      <iframe title={title} src={embedLink} allowFullScreen />
    </AspectRatio>
  );
};
Ratio.propTypes = {
  link: PropTypes.string,
};
export default Ratio;
