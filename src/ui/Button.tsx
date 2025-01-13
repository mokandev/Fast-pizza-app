import { Link } from 'react-router-dom';

interface IButtonProps {
  children: string;
  disabled?: boolean;
  to?: string;
}

export const Button: React.FC<IButtonProps> = ({ children, disabled, to }) => {
  const className =
    'inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-500 sm:px-10 sm:py-4';

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};
