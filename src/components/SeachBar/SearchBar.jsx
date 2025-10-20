import Button from '../Button/Button.jsx'

function SearchBar(){
return(
  <div className="container-mt-3">
    <form id='search-bar'className="d-flex" role="search">
      <input type="search" placeholder="Pesquisar..." className="me-2" style={{width: "500px"}}/>
      <Button/>
    </form>
  </div>
)
}


export default SearchBar