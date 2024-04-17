import "./App.css"; //importando folhas de estilo
import "./styles.css"; //importando folhas de estilo

// função que retorna elementos HTML que será a flexbox.
function Flexbox() {
  return (
    <>
      <div className="container"> {/* Container que contém os elementos filho*/}
        <div className="child" id="c1"> {/* Elemento filho 1*/}
          Elemento 1 
        </div>
        <div className="child" id="c2"> {/* Elemento filho 2*/}
          Elemento 2
        </div>
        <div className="child" id="c3"> {/* Elemento filho 3*/}
          <button>Botao</button>
        </div>
      </div>
    </>
  );
}

export default Flexbox;
