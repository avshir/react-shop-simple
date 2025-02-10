const Header = () => {
  return (
    <nav className='indigo darken-1'>
      <div className='nav-wrapper container'>
        <a href='/' className='brand-logo'>
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
          <li>
            <a href='badges.html'>Components</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
