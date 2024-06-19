import titleLogo from '../imgs/image.svg';

function TopPageTitle({pageTitle}) {
    return (
        <div className='flex'>
            <img src={titleLogo}></img>
            <h1>{pageTitle}</h1>
        </div>
      
    );
}
export default TopPageTitle;
