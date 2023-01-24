import { Box } from 'components/Box';
import { Text, Link } from './Error.styled';

const Error = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding={7}
    >
      <Text>
        Упсс...напевно, щось пішло не так (автор покищо не знає back end, щоб
        його написати 🤷‍♀️), але це легко виправити. Скачай{' '}
        <Link
          href="https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc"
          target="_blank"
          rel="noopener noreferrer"
        >
          ось це розширення для браузера{' '}
        </Link>
        і користуйся насправді класним конвертором 😎 Завжди актуальний курс
        самих популярних валют 😉
      </Text>
    </Box>
  );
};

export default Error;
