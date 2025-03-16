"use client";
import { useState } from "react";
import styles from './styles/BalanceToggle.module.css';

export default function BalanceToggle() {
    const [text, setText]= useState("****");
    const [icon, setIcon]= useState("bx bx-hide");
    function toggle(){
        setText((balanceDisplay ) =>
            balanceDisplay==="****"? "NA": "****"
    );
        setIcon((prevIcon) =>
            prevIcon==="bx bx-hide"? "bx bxs-bullseye": "bx bx-hide"
    );
    }
    return(
        <>
        <div className="flex">
              <i className="bx bxs-check-shield"></i>
              <h5>Available Balance</h5> <button className={icon} onClick={toggle}></button>
            </div>
            <h2 className={styles.bal}>{text}

            </h2>
        </>
    )
}