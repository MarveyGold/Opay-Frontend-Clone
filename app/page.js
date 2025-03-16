import Image from "next/image";
import styles from "./page.module.css";
import BalanceToggle from './components/BalanceToggle';
export default function Home() {
  return (
    
   
    <div className={styles.page}>
      
      <main className={styles.main}>
        <div className={styles.balance}>
          <div className={styles.container}>
            <div className={styles.block}>
              
            <BalanceToggle />
            </div>
            <div>
              <h5 className={styles.th}>Transaction History</h5>
              <button className={styles.fund}>+ Add Money</button>
            </div>
          </div>
        </div>
        <div className={styles.bank}>

        <div><h5>To Opay</h5></div>
        <div><h5>To Bank</h5></div>
        <div><h5>Withdraw</h5></div>
        
        </div>
         <div className={styles.email}>
         <span><i className='bx bxs-envelope'></i><i className="bx bx-bell"></i></span>
         <div className={styles.emailText}>
            <h4>Take Control, Stay Informed</h4>
           <h6>Add your email to get the latest from Opay</h6>
         </div>
         <div>
            <button>Go</button>
         </div>
        </div>
        <div className={styles.services}></div>
      </main>
      <footer className={styles.footer}>
        <div>Home</div>
        <div>Rewards</div>
        <div>Finance</div>
        <div>Cards</div>
        <div><i className="bx bxs-user"></i><h4>Me</h4></div>
      </footer>
    </div>
  )
}