
import '../css/footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className='footer_row'>
            <div className='footer_column'>
<p className='header'> willies cleaning </p>
<p> We provide cleaning services ranging from office to your home. Our services are first class done with professionals equipped with the right cleaning materials.</p>

            </div>

            <div className='footer_column'>
            <p className='header'> Quick Links</p>
            < a href='/home'>Home</a><br/>
            < a href='/contact'>Contact</a><br/>
            < a href='/contact'>About us </a><br/>
            </div>

            <div className='footer_column'>
            <p className='header'>Important Links</p> 
            < a href='/home'>Carpet Cleaning Services</a><br/>
            < a href='/contact'>Sofa Cleaning Services</a><br/>
            < a href='/contact'>Office Cleaning Services  </a><br/>
            < a href='/contact'>Cabro Cleaning Services  </a>
            </div>

            <div className='footer_column'>
            <p className='header'>Let’s Connect!</p>
            </div>

        </div>

     <hr/> 

     <div className='footer_card_holder'> 
     
     <div className='footer_card_area'> <p>Copyright © 2022 willies Cleaning</p></div>

     <div className='footer_card_area'>     <p>Powered by Pollad Technologies</p> </div>
     </div>
     

    
    </div>
  );
}

export default Footer;
