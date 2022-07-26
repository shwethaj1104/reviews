import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index]

  const checkNumber = (number)=>{
    if(number<0){return people.length-1}
    if(number > people.length-1){return 0}
    return number;
  }

  const prevBtn=()=>{
    setIndex((index)=>{
      let newIndex = index-1
      return checkNumber(newIndex)
    })
  }
  const nextBtn=()=>{
    setIndex((index)=>{
      let newIndex = index+1
      return checkNumber(newIndex)
    })
  }
  const randomPerson= ()=>{
    const randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index){
      randomNumber = index+1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
      <article className='review'>
        <div className='img-container'>
          <img src={image} className='person-img'></img>
          <span>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevBtn}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextBtn}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>Surprise Me</button>
      </article>
  );
};

export default Review;
