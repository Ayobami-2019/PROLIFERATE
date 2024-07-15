import { MyButton } from '../button';
import { CustomInput } from '../input';
import React from 'react';
import MyRating from '../rating';
import style from './style.module.css';
import { useContext } from 'react';
import {TutorContext} from './Add'
// import {GlobalContext} from "../../App"

// --legacy-peer-deps

// export const ProgressDashboard = () => {
//     return (
//         <Dashboard>
//             <section className={style.main}>
//                 <h3>Progress Tracker</h3>
//                 <ProgressTable />
//             </section>
//         </Dashboard>

//     )
// }

export const MobilePayment = () => {
    const info = useContext(TutorContext);

    return (
        <section className={style.main}>
            <h3>Make Payment</h3>
            <div className={style.paymentDiv}>
                <div className={style.tutorInfo}>
                    {info.icon}
                    <div>
                        <p className={style.name}>{info.name}</p>
                        <p className={style.course}>{info.course} Tutor</p>
                        <MyRating />
                    </div>
                </div>
                <form action="" className={style.rowImput}>
                    <CustomInput type="select" label='Select Month:' name='month'
                    // onChange={handleInput}
                    >
                        <option value="Month">Month</option>
                        <option value="Month">Jan</option>
                    </CustomInput>
                    <div className={style.radioInputs}>
                        <p>Payment Method</p>
                        {/* <div> */}
                        <input type="radio" id='credit' name='credit' value='credit' />
                        <label htmlFor="credit">Credit Card</label>
                        <input type="radio" id='debit' name='debit' value='debit' />
                        <label htmlFor="debit">Debit Card</label>
                        <input type="radio" id='paypal' name='paypal' value='paypal' />
                        <label htmlFor="paypal">Paypal</label>
                        <input type="radio" id='transfer' name='transfer' value='transfer' />
                        <label htmlFor="credit">Bank Transfer</label>
                        {/* </div> */}
                    </div>
                    <CustomInput
                        // onChange={handleInput} 
                        name='name' type="text" label={"Name on Card:"} />
                    <CustomInput
                        // onChange={handleInput} 
                        name='number' type="number" label={"Card Number"} />
                    <CustomInput
                        // onChange={handleInput} 
                        name='name' type="number" label={"Expiration"} />
                    <CustomInput
                        // onChange={handleInput} 
                        name='name' type="number" label={"CVV/CVC"} />
                    <MyButton type='primary'
                    // onClick={handleSave}
                    // disabled={isSubmitting}
                    >Confirm Payment
                    </MyButton>
                </form>
            </div>
        </section>
    )
}