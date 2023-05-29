import { useState } from "react"
import styles from '../button.module.css'

export default function MyCount() {

    const [count, setCount] = useState(0)

    function change(amount) {
        setCount(count + amount)
    }
    return(

        <div className="container">
            <h1>Minha contagem</h1>


            <h3>{count}</h3>

            <div className={styles.btns}>
                <button onClick={()=>change(1)}> Aumentar </button>
                <button onClick={()=>change(- 1)}> Diminuir </button>
            </div>
        </div>
    )
}