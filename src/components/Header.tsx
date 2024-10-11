import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="sticky top-0 backdrop-blur-[6px] z-10">
      <div className="flex items-center w-full h-14">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
