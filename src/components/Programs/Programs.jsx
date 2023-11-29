import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programData'
import  rightArrow  from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className='stroke-text'>Explora nuestros </span>
        <span>programas</span>
        <span className='stroke-text'> y moldeate a tu manera</span>
      </div>

      <div className="program-categories">
        {
          programsData.map((program) =>
            <div className="category">
              {program.image}
              <span>{program.heading}</span><span>{program.details}</span>
              <div className="join-now"><span>Unete ahora</span><img src={rightArrow} alt="" /></div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Programs;
