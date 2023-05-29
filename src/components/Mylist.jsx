import { useEffect, useState } from "react"

const minhalista = [
    { id:'1', type: "legume", value:"Abacate"},
    { id:'2', type: "fruta", value:"Maçã"},
    { id:'3', type: "legume", value:"Abobora"},
    { id:'4', type: "legume fruta", value:"Tomate"},
    { id:'5', type: "fruta", value:"Banana"},
    { id:'6', type: "carne", value:"Bacon"},
]


export default function MyList() {
    
    const [product, setProduct] = useState(minhalista);
    const [search, setSearch] = useState('');
    
    useEffect(
        () => {
            if (search) {

                const newList = minhalista.filter( (item) => {
                    return item.type.toLowerCase().includes(search.toLowerCase())
                })
                setProduct(newList)
            } else {
                setProduct(minhalista)
            }
            }
        , [search])
    // Detalhe do meu erro, ao inves de criar uma array que leva o search como valor, criei um objeto.

    return (
        <div>
            <h1>Efeito colatel</h1>
            <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Pesquise aqui"></input>

            {product.map( (item)=>{
                return(
                    <div key={item.id}>
                        <p>{item.value}</p>
                    </div>
                )
            })}
        </div>
        
    )

}