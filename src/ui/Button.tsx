import { Link } from 'react-router-dom';

interface IButtonProps {
  children: string;
  disabled?: boolean;
  to?: string;
  type: 'small' | 'primary';
}

export const Button: React.FC<IButtonProps> = ({
  children,
  disabled,
  to,
  type,
}) => {
  const base =
    'inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-500 ';

  const styles = {
    primary: base + 'px-4 py-3 md:px-10 md:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};
