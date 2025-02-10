const Header = () => {
  return (
    <nav className='indigo darken-1'>
      <div className='nav-wrapper container'>
        <a
          href='https://avshir.github.io/react-shop-simple/'
          className='brand-logo'
        >
          React Simple Shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/avshir/react-shop-simple'
              target='_blank'
              rel='noreferrer'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
