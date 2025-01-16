const expr='Cam';
switch(expr){
    case'Tao':
    console.log('Oranges are $0.59 a pound.');
    break;
    case'Cam':
    case'Buoi':
    console.log('Cam va Buoi gia 20.000kg');

    break;
    default:
        console.log(`xin loi chung toi khong co gia ${expr}`);
}