import logo from '../../../assets/logo (2).png'

const Header = () => {
    return (
        <div className='flex items-center justify-center my-6'>
           <img src={logo} alt="" />
           <h1 className='lg:text-6xl text-3xl font-extrabold bg-gradient-to-r bg-300% from-purple-600
            via-purple-600 to-teal-500 text-transparent bg-clip-text animate-gradient'> FIVE Jumeirah Village</h1>
        </div>
    );
};

export default Header;