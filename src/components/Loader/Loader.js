import { ThreeDots } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => (
  <Container>
    <ThreeDots
      height="60"
      width="60"
      radius="9"
      color="#ff6d00"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      visible={true}
    />
  </Container>
);
