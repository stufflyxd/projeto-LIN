import roupa from "../../assets/roupa_exemplo.jpg"

function Card(){

  return (
    <div className="card p-3 m-2" style={{maxWidth: "10rem"}}>
        <img className="card-img-top" src={roupa} alt="roupa feminina"></img>
        <div className="card-body">
          <h5 className="card-title">Exemplo...</h5>
          <p className="card-text">Exemplo de texto...</p>
          <div className="">
          <a href="#" className="btn btn-danger">Confira</a>
          </div>
        </div>
    </div>
  )
}

export default Card