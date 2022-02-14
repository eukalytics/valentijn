import Typing from "./component/Typing";
import Grid from "./component/Grid";
import Btn from "./component/Btn";
import { useState } from "react";
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';

export default function Valentijn() {
  const [stage, setStage] = useState(1);

  const incrStage = () => {
    setStage(stage + 1);
    console.log(stage);
  }

  const text = { 
    1: 'Blain Maguire, will you be my valentine?',
    2: 'Are you 142% sure?',
    3: 'Are koalas bears?',
    4: 'Happy Valentines Day! 🐨😘'
}

const { width, height } = useWindowSize()

  const confetti = <Confetti
      recycle={false}
      numberOfPieces={1000}
      opacity={0.7}
      initialVelocityY={-10}
      height={height}
      width={width}
      colors={['#FF0000', '#FFFFFF', '#FFC0CB']}
    />


  return (
    <div className="bg-black min-h-screen font-mono p-10">
        <Grid stage={stage}/>
        <Typing text={text[stage]} />
        {stage < 4 && <Btn incrStage={incrStage} /> }
        {stage === 4 && confetti}
    </div>
  );
}