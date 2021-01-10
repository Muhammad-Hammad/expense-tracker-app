import { createContext, useReducer} from "react";
import TransactionReducer from "./transReducer"

const initialTransactions =[]

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
    let deleteTransaction = (id) =>{
           dispatch({
            type: "DELETE",
            payload: id
           })
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}