import { AspectRatio } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Ratio = ({ link, title }) => {
  return (
    <AspectRatio w="full" height={450} ratio={1}>
      <iframe title={title} src={link} allowFullScreen />
    </AspectRatio>
  );
};
Ratio.propTypes = {
  link: PropTypes.string,
};
export default Ratio;
