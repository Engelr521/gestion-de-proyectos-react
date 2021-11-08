import React from 'react'
import Button from '../components/Button';


const Index = () => {



    return (
        <div>
            <div className="container text-center">
                <h1>Hola mundo!! Soy la pagina INDEX</h1> 
            </div> 
            <br />
            <i className ="fa fa-solid fa-truck-moving"></i>
            <br />
            <i className="fa fa-pen"></i>
            <br />
            <i className="fa fa-pen"></i>
            <div className="container-fluid">
                <div className="row align-items-center"> 
                    <form className="col">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <div className="col text-center">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Index;
