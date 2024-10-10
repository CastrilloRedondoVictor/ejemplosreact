import '../assets/styles/dobleNumero.css'

function SumarNumeros() {

    const calcular = (num1, num2) => {
        console.log(num1*num2)
    }

    return(
        <div>
            <h1 className='h1'>DIV Suma</h1>
            <button className="button" onClick={() => calcular(5, 5)}>MULTIPLICAR 5 * 5</button>
            <button className="button" onClick={() => calcular(10, 10)}>MULTIPLICAR 10 * 10</button>
        </div>
    )

}

export default SumarNumeros;