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

{
    name: 'Nike Air Max Plus 3',
    price: '$245',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/373610d3-ed0a-48c9-8918-51dd05bc8a96/air-max-plus-3-leather-shoe-brGftH.jpg',
    description: 'Featuring the iconic Tuned Air technology of its predecessors, the Nike Air Max Plus 3 updates the look with TPU fused to its velvety leather upper. Paying homage to the OG, it features sharp contrasting colours that give you an edge over the competition.'
},

{
    name: 'Nike Air Zoom-Type',
    price: '$195',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/55677fef-9eb6-4fbb-9ed2-98434aefa350/air-zoom-type-shoe-Q1QSmz.jpg',
    description: 'Celebrate Nike innovation and sports heritage in the Nike Air Zoom-Type. It brings a deconstructed, DIY aesthetic to the streets with its zig-zag stitching, and colours inspired by Japan street culture. The stacked foam at the heel and contrast-coloured Zoom Air cushioning at the forefoot use the same technology used by the world elite athletes for an unparalleled ride.',
},

{
    name: 'Nike React Vision',
    price: 'S185',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6d90a0ed-c6c1-45f6-8cd0-2d14a8853e68/react-vision-shoe-dK1mnR.jpg',
    description: 'The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colours are combined in a design influenced by the exaggerated world of our dreams, while React foam and an ultra-plush tongue provide surreal comfort.',
},

{
    name: 'Nike Pegasus Trail 2',
    price: 'S165',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c48c5ac-68d7-4c86-8892-1f405f834bc0/pegasus-trail-2-trail-running-shoe-ZCfbql.jpg',
    description: 'Find your wings on the path less travelled. The Nike Pegasus Trail 2 delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction.',
},

];

// console.log(Data[0].name,'dataaa')

const ShoesData = createContext(Data);

export default ShoesData;




