import './Weather.css';
import 'remixicon/fonts/remixicon.css'

const Weather = () => {
    return (
        <div className='container'>
            <div className='main-container'>
                <div className='area-info-a'>
                    <h4 className='local'>São Paulo</h4>
                    <i class="ri-map-pin-line"></i>
                    <i class="ri-arrow-down-s-fill"></i>
                </div>
                <div className='area-info-b'>
                    <h1 className='temperatura'>22°</h1><p className='dia-atual'>SEGUNDA 22/14°</p>
                    <img src='./img/big-sun.png' alt='Imagem sol' className='img-principal' />
                </div>
                <div className='area-info-b'>
                    <ul>
                        <li><i class="ri-sun-line"></i>Terça - 25/20°</li>
                        <li><i class="ri-sun-line"></i>Quarta - 25/20°</li>
                        <li><i class="ri-sun-line"></i>Quinta - 25/20°</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Weather;