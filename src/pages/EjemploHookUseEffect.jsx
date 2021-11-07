import React, {useState, useEffect} from 'react'



const EjemploHookUseEffect = () => {

    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)
    const [suma, setSuma] = useState(0)

    useEffect(() => {
        console.log('cambio alguno de los dos valores y ya son: ', 'Valor1: ', valor1, 'Valor2: ', valor2);
        setSuma(valor1 + valor2);
        }, [valor1, valor2])

    return (
        <div className="mt-5">
            <div className="container  text-center">
                <h1>Hook- React</h1> 
                <h1>Ejemplo useState</h1> 
            </div> 
            <br />
            <div className="container-fluid p-5">
                <div className="row align-items-center"> 
                    <div className="col border border-primary p-1 m-1">
                        <div className="mb-3">
                            <label  className="form-label  fw-bolder ">Valor 1</label>
                            <input 
                                type="number" 
                                value={valor1} 
                                onChange={(e) => {setValor1(parseInt(e.target.value));}} 
                                placeholder="Digite Valor 1" 
                                className="form-control" 
                                
                                ></input>
                            
                            <label  className="form-label  fw-bolder ">Valor 2</label>
                            <input 
                                type="number" 
                                value={valor2} 
                                onChange={(e) => {setValor2(parseInt(e.target.value));}} 
                                placeholder="Digite Valor 2" 
                                className="form-control" 
                                
                                ></input>

                        </div>
                                                
                        <button onClick={() =>{setSuma(valor1, valor2);}} className="btn btn-primary">Enviar</button>
                    </div>
                    <div className="col border border-primary  m-1">
                        <h3 className="text-center">El resultado de la suma de las variables 1 y  2, es:</h3>
                        <br />
                        <br />
                        <h3 className="text-center border border-primary">{suma}</h3>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}



export default EjemploHookUseEffect;
