import { createContext, useReducer} from "react";
import TransactionReducer from "./transReducer"

const initialTransactions =[
    { amount: 500, desc: "Cash" },
    { amount: -200, desc: "book" },
    { amount: -40, desc: "Camera" }
]

export  const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    let addTransaction = (transObj) =>{
        dispatch({
            type: "ADD",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}