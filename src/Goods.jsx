import React, { useState } from 'react';
import './App.css';

function Goods() {
  const mockGoods = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const [view, setView] = useState('tiles');
  
  const IconSwitch = ({onSwitch}) => {
    return (
      <button onClick={onSwitch} className='switchButton'>
        <span className="material-icons">{view === 'tiles' ? 'dashboard' : 'view_list'}</span>
      </button>
    )
  }

  const onSwitch = () => {
    if (view === 'tiles') {
      setView('list')
    } else { setView('tiles') }
  }

  return (
    <div className='goodsArea'>
      Goods Task
      <div>
        <IconSwitch onSwitch = {onSwitch}/>
        <div className={view === 'tiles' ? 'listView' : 'tilesView'}>
          {mockGoods.map(item => (
            <div key={Math.random() * 10000} className='item'>
              <p>{item.name}</p>
              <p>{item.color}</p>
              <img src={item.img} alt={item.name} className='itemImage'></img>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Goods;