import { useState } from 'react'
import axios from 'axios'

function Ram() {

    const [conteudo, setRam] = useState("vazio")
    const getRam = async () => {
        const response = await axios.get("https://rickandmortyapi.com/api")
        setRam(response.data)
        console.log(conteudo.name)
        console.log(conteudo.stats.map((item)=> console.log(item)))
    }
    


    return (
        <div>
            <button onClick={getRam}>Pesquisa</button>

            {Ram === "vazio" ?
                <h2>Nada pesquisado ainda...</h2>
                :
                <div>
                <img src=""></img>
                    <h2>Resultados da perqusa: </h2>
                    <p>{Ram.name}</p>    
                    <p>{Ram.weigth}</p>
                 
                    
                    
                    
                </div>

            }
        </div>
    )

}
export default Ram