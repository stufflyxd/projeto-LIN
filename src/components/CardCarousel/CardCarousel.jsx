import Card from '../Card/Card'

const CardCarousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Card/>
      </div>

      <div className="carousel-item">
        <Card/>
      </div>


    </div>

    <a className="carousel-control-prev" href="#carouselExampleControls" role='button' data-slide='prev'>
      <span className='carousel-control-prev-icon' arial-hidden="true"></span>
      <span className="sr-only">Anterior</span>

    </a>

    <a className="carousel-control-prev" href="#carouselExampleControls" role='button' data-slide='prev'>
      <span className='carousel-control-next-icon' arial-hidden="true"></span>
      <span className="sr-only">Próximo</span>

    </a>
  </div>
  )
  
}

export default CardCarousel