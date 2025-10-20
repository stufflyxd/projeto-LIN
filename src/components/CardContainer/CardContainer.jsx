const CardContainer = () => {
      const produtos = [
      {id: 1, nome: "Camisa Azul", categoria: "Blusa", cor: "Preta", tamanho: "M", quantidade: 98, imagem: "blablabla", preco: 59.7},
      {id: 2, nome: "Calça Jeans", categoria: "Blusa", cor: "Preta", tamanho: "M", quantidade: 98, imagem: "blablabla", preco: 59.7},
      {id: 3, nome: "Camida Verde", categoria: "Blusa", cor: "Preta", tamanho: "M", quantidade: 98, imagem: "blablabla", preco: 59.7},
      {id: 4, nome: "Camisa", categoria: "Blusa", cor: "Preta", tamanho: "M", quantidade: 98, imagem: "blablabla", preco: 59.7,}, 
      {id: 5, nome: "Texto Azul", categoria: "Blusa", cor: "Preta", tamanho: "M", quantidade: 98, imagem: "blablabla", preco: 59.7}

    ]
      

  return (


    <div className="container mt-4">
      <h2 className="text-center mb-4">Produtos exclusivos</h2>
      <p className="fst-italic text-center">"Seu look, sua atitude"</p>

      <div className="row g-4">
        {produtos.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img src={item.imagem} className="card-img-top" alt={item.nome}/>
                <div className="card-body text-center">
                  <h5 className="card-title">{item.nome}</h5>
                  <p className="card-tittle">{item.preco}</p>
                  <button className="btn btn-primary">Mais</button>
                </div>
              </div>
            </div>
        ))}
      </div>

    </div>
  )
}

export default CardContainer