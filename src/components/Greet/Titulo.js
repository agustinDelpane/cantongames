const TituloGreet = ( {titulo, saludo} ) => {
    return (
        <div>
            <h2>{ titulo }</h2>
            <h3>Disfrute su estadía!</h3>
            <button onClick={ saludo }>Ejecutar saludo</button>
        </div>
    )
}

export default TituloGreet