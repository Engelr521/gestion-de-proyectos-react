import React, {useState} from 'react'



const EjemploHookUseState = () => {

    const [variable1, setVariable1] = useState("Soy un valor quemado")
    const [valorInput, setValorInput] = useState()


  

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
                            <label  className="form-label  fw-bolder ">Variable 1</label>
                            <input 
                                type="text" 
                                value={valorInput} 
                                onChange={(e) => {setValorInput(e.target.value);}} 
                                placeholder="Digite variable" 
                                className="form-control" 
                                id="text" 
                                ></input>
                            
                        </div>
                                                
                        <button onClick={() =>{setVariable1(valorInput);}} className="btn btn-primary">Enviar</button>
                    </div>
                    <div className="col border border-primary  m-1">
                        <h3 className="text-center">El Valor de la variable es:</h3>
                        <br />
                        <br />
                        <h3 className="text-center border border-primary">{variable1}</h3>
                        
                    </div>
                </div>
            </div>
            <br />
            <div className="border border-primary  m-5 p-5">
                <h3 className="text-center"> El valor del Input Modificandose es:</h3>
                <h3 className="text-center"> {valorInput}</h3>
            </div>
        </div>
    )
}



export default EjemploHookUseState;
