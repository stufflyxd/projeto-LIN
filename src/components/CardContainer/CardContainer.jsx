import React from "react";
import { Link } from 'react-router-dom'
const CardContainer = () => {
  const produtos = [
    { id: 1, nome: "Camisa Azul", categoria: "Blusa", cor: "Preta", tamanho: "M", quantidade: 98, imagem: "/produtos/camisa-azul.jpg", preco: 59.7 },
    { id: 2, nome: "Calça Jeans", categoria: "Calça", cor: "Azul", tamanho: "M", quantidade: 75, imagem: "/produtos/calca-jeans.jpg", preco: 89.9 },
    { id: 3, nome: "Camisa Verde", categoria: "Blusa", cor: "Verde", tamanho: "G", quantidade: 43, imagem: "/produtos/camisa-verde.jpg", preco: 64.5 },
    { id: 4, nome: "Camiseta Básica", categoria: "Blusa", cor: "Branca", tamanho: "M", quantidade: 120, imagem: "/produtos/camiseta-branca.jpg", preco: 49.9 },
    { id: 5, nome: "Jaqueta Jeans", categoria: "Casaco", cor: "Azul", tamanho: "G", quantidade: 60, imagem: "/produtos/jaqueta-jeans.jpg", preco: 159.9 },
  ];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Produtos Exclusivos</h2>
          <p className="fst-italic text-muted">“Seu look, sua atitude.”</p>
        </div>

        <div className="row g-4">
          {produtos.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "16px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={item.imagem || "https://via.placeholder.com/300x300?text=Sem+Imagem"}
                  className="card-img-top"
                  alt={item.nome}
                  style={{
                    objectFit: "cover",
                    height: "240px",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title fw-semibold text-dark">{item.nome}</h5>
                  <p className="text-primary fw-bold fs-5 mb-3">
                    R$ {item.preco.toFixed(2).replace(".", ",")}
                  </p>
                    <Link to={'/product-details'} className="btn btn-outline-primary w-100 fw-semibold">Ver Detalhes</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
