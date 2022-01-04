import React, { useState } from 'react';
import './App.css';

function App() {
  // Portfolio task
  const mockData = [{
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers"
  }];

  const filters = [];
  mockData.forEach(item => {
    if (!filters.includes(item.category)) {
      filters.push(item.category)
    };
  })

  const [filter, setFilter] = useState('any');

  const checkActiveButton = (str) => {
    if (str !== filter) {
      return 'portfolioFilter'
    } else return 'portfolioFilterActive'
  }

  // Goods task

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
    <>
    {/*Portfolio task*/}
    <div className='portfolioArea'>
      Portfolio Task
      <div className='portfolioFilters'>
      <button className={checkActiveButton('any')} onClick = {
            () => setFilter('any')
          }>
            Any
        </button>
        {filters.map(item => (
          <button className={checkActiveButton(item)} key={Math.random() * 10000} onClick = {
            () => setFilter(item)
          }>
            {item}
          </button>))
        }
        <button className={checkActiveButton('noFilter')} onClick = {
            () => setFilter('noFilter')
          }>
            Hide cards task
        </button>
      </div>
      <div className='portfolioItems'>
      {mockData.map((item) => {
        return (
          item.category === filter || filter === 'any' ?
            (
              <img src={item.img} key={Math.random() * 10000} alt={item.category} className='portfolioItem'></img>
            ):false)})
        }
      </div>
    </div>
    {/*Goods task*/}
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
    </>
  );
}

export default App;
