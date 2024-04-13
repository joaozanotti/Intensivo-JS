function Navegacao({alterarPaginaSelecionada}) {
    return (
        <div className="navegacao">
            <label onClick={() => alterarPaginaSelecionada(0)}>Pratos Principais</label>
            <label onClick={() => alterarPaginaSelecionada(1)}>Sobremesas</label>
            <label onClick={() => alterarPaginaSelecionada(2)}>Bebidas</label>
        </div>
    );
}

export default Navegacao;