import React, { useState } from 'react'
import Split from 'react-split'
import ProblemDescription from './ProblemDescription'
import PlayGround from './PlayGround/PlayGround'
import Confetti from 'react-confetti'
import useWindowSize from '../hooks/useWindowSize'

const WorkSpace = (props) => {
  const {width , height} = useWindowSize();
  const [success , setSuccess] = useState(false);
  const [solved,setSolved] = useState(false);
  return (
    <div className='scrollbar-hide'>
     <Split className="split" minSize={0}>
    <ProblemDescription problem={props.problem} solved={solved} />
    
    <div>
    <PlayGround problem={props.problem} setSuccess={setSuccess} setSolved={setSolved}/>
    {success && <Confetti gravity={0.3} tweenDuration={4000} width={width} height={height}/>}
    </div>
     </Split>
    </div>
  )
}

export default WorkSpace
