import Nav from './components/Homepage/nav';
import Cardbg from './components/Homepage/hero';
import Product from './components/Homepage/product'
import Testinomials from './components/Homepage/testinomial'
import Popular from './components/Homepage/popular'
import Footer from './components/Homepage/footer'
import Cartinfo from './components/Product/selecPro'
import Cartitems from './components/Product/insidecart'
import Auth from './components/Product/auth'
import Shipping from './components/Product/shipping'
import  Payment from './components/Product/payment'
import  Payconf from './components/Product/confirmation'
import './globals.css';



export default function Home() {
  return ( 
    
 <>

 <Nav />
<Cardbg />
<Product />
<Testinomials />
<Popular />
<Cartinfo />  
<Cartitems />
<Auth />
<Shipping />
<Payment />
<Payconf />
<Footer />

 </>    
    
  )
}
