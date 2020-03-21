import React from 'react'

 function Rating({ rate, getRate = () => {} }) {

  const stars = rate => {
    let starTab=[]
    for(let i=1;i<=5;i++){
      if(i<=rate){
      starTab.push(<i key={i} className="fas fa-star star-gold" onClick={() => getRate(i)}></i>)
      }else  starTab.push(<i key={i} className="fas fa-star" onClick={() => getRate(i)}></i>)
    }
    return starTab;

  }

  return (
    <div>
    {stars(rate)}
    </div>
  )
}

export default Rating;