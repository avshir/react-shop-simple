const Footer = () => {
  return (
    <footer className='page-footer indigo darken-1'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} avshir | Copyright
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/avshir/react-shop-simple'
            target='_blank'
            rel='noreferrer'
          >
            Repo avshir
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
