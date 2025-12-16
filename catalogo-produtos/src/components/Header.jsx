import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <h2>Minha Loja</h2>

      <nav>
        <a href="#">Catálogo</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
