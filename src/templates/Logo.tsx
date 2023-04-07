import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-100 inline-flex items-center ${fontStyle}`}>
      <img
        className="mr-2"
        width={size}
        height={size}
        alt="logo"
        src="/favicon.png"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
