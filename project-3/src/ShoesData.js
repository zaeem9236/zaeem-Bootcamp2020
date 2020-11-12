import {createContext} from 'react';

const Data = [
    {
        name: 'Nike Air Max Plus III',
        price: '$250',
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d72a3e9b-bb1a-42ad-ba09-844e63adca00/air-max-plus-iii-shoe-vP80ld.jpg',
        description: 'Featuring the same Tuned Air technology that originally put it in the sneaker history books, the Nike Air Max Plus III updates the look with TPU fused to the upper while paying homage to the iconic colour fade.'
    },

    {
        name: 'Nike Air Max 97',
        price: '$225',
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a47b2ef9-8239-4e82-99fd-e6159c0df489/air-max-97-shoe-z3TlrlVN.jpg',
        description: 'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours and crisp details, it lets you ride in first-class comfort.'
    },
];

const ShoesData = createContext(Data);

export default ShoesData;

