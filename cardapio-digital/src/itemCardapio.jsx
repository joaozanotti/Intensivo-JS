function ItemCardapio({ nome, descricao, preco, imagem }) {
    return (
        <div>
            <div className="container-item-cardapio">
                <div>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <p>{preco}</p>
                </div>
                <img src={imagem}/>
            </div>
        </div>
    );
}

export default ItemCardapio;