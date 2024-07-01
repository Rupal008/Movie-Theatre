
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="   mt-10 justify-evenly text-sm">
      <div className="row">
       
        <div className="col-sm text-white m-auto  flex justify-center text-xs">
          <span className="tracking-widest mx-5">Terms Of Use</span>
          <span className="tracking-widest mx-5" >Privacy-Policy</span>
          <span className="tracking-widest mx-5" >About</span>
          <span className="tracking-widest mx-5" >Blog</span>
          <span className="tracking-widest mx-5" >FAQ</span>
        </div>
       
      </div>
      <div className="row mt-4">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="m-auto w-2/4 justify-center">
          <p className="align-sub text-white m-auto ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis, adipisci dolor illo recusandae modi error mollitia quas dolore consequatur tempora unde itaque atque vitae nihil blanditiis Corporis, molestiae.Lorem ipsum  amet  </p>
          <p className="text-white text-center">consectetur adipisicing elit. Necessitatibus quis Necessitatibus quis</p>
          </div>
         
        </div>
      </div>
    
      
     
      <div className="row">
       <div className=" col-lg col-sm text-white m-auto justify-center mt-10 flex  text-xs">
         <FacebookIcon className='mx-4'/>
         <InstagramIcon className='mx-4'/>
         <TwitterIcon className='mx-4'/>
         <LinkedInIcon className='mx-4'/>
       </div>
     </div>

     <br/>

     <div className="row">
        <div className="col-sm-12">
          <hr className="text-white font-extrabold" />
        </div>
      </div>
      
    </div>
  );
};
export default Footer;

