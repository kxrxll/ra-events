import React, { useState } from 'react';
import './App.css';

function Portfolio() {
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

  return (
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
  )
}

export default Portfolio;