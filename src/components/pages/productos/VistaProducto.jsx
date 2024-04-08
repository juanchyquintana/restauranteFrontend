const VistaProducto = () => {
  return (
    <section className="container my-4 mainSection">
      <div className="row  border border-success rounded pb-2">
        <div className="col-lg-6 text-center my-3">
          <img
            src="https://www.distribuidora7y3.com.uy/wp-content/uploads/2024/02/P482477-2.webp"
            alt="cerveza"
            className="vistaCard img-fluid"
          />
        </div>
        <div className="col-lg-6 bg-white">
          <h4 className="my-3">Cerveza Tsingtao</h4>
          <hr />
          <p>
            Tsingtao es una cerveza china de estilo Pale Lager, de sabor
            agradable y refrescante con notas dulces y un toque a nueces. Se
            elabora con ingredientes de gran calidad que incluyen levadura
            alemana, malta de cebada de Australia, Francia y Canadá y lúpulos y
            arroz del oeste de China.
          </p>
          <hr />
          <h5 className="my-2">Categoria: bebida</h5>
        </div>
      </div>
    </section>
  );
};

export default VistaProducto;
