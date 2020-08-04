import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/24616057?s=460&u=4adbcebbd0b7eba992f7ecbc544edfaba0545f57&v=4" alt="Imagem"/>
                <div>
                    <strong>Ernando Ferreira</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae imperdiet sem, vel cursus sem.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ex leo, sollicitudin posuere ullamcorper a, vestibulum eget lorem. Pellentesque fringilla enim felis, eu pharetra enim sodales vitae. Pellentesque ullamcorper, nisl ac porttitor blandit, lacus turpis maximus odio, vel auctor est orci et diam. Donec dignissim eleifend tortor nec tincidunt. Ut tristique dictum nulla, id finibus lacus maximus laoreet. Nam at dapibus justo, quis scelerisque mi. Integer at semper purus, vitae cursus dui.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;