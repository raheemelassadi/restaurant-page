import { initialLoad } from "./modules/inital-load";
import { contactLoad } from "./modules/contact";
import { menuLoad } from "./modules/menu";
import './styles.scss';
const content = document.querySelector('#content')


initialLoad()
logic()


function logic(){
    const home = document.querySelector('.home')
    home.addEventListener('click', initialLoad)

    const contact = document.querySelector('.contact')
    contact.addEventListener('click', contactLoad)
    
    const menu = document.querySelector('.menu')
    menu.addEventListener('click', menuLoad)
}








