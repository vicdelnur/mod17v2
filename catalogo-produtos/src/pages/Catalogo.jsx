import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";
import "../styles/catalogo.css";

function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: ""
  });

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          id: 1,
          nome: "Camisa Básica",
          descricao: "Camisa 100% algodão",
          preco: 59.9
        },
        {
          id: 2,
          nome: "Calça Jeans",
          descricao: "Calça jeans azul",
          preco: 129.9
        }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const novoProduto = {
      id: Date.now(),
      nome: form.nome,
      preco: form.preco,
      descricao: form.descricao
    };

    setProdutos([...produtos, novoProduto]);

    setForm({
      nome: "",
      preco: "",
      descricao: ""
    });
  }

  return (
    <div className="catalogo">
      <h1>Catálogo</h1>

      {/* FORMULÁRIO */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
          required
        />

        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          required
        />

        <button type="submit">Adicionar Produto</button>
      </form>

      {/* LISTAGEM */}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="produtos-grid">
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalogo;
