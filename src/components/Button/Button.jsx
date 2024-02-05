import css from './Button.module.css';

const Button = ({ onClick, type = 'submit', children }) => {
  return (
    <button onClick={onClick} type={type} className={css.button}>
      {children}
    </button>
  );
};

export default Button;
