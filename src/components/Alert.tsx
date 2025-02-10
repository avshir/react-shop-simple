import { useEffect } from "react";

interface AlertProps {
  name: string;
  closeAlert: () => void;
}
const Alert = ({ name, closeAlert }: AlertProps) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => clearTimeout(timerId);
    //eslint-disable-next-line
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} added to cart</div>
    </div>
  );
};

export default Alert;
