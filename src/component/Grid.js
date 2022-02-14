import { Pixelify } from "react-pixelify";

export default function Grid({stage}) {
    
    const src = require('./kusje.jpg')
    const pixelSize = { 
        1: 40,
        2: 30, 
        3: 20,
        4: 0
    }

    return(
        <div className="mb-10 grid grid-cols-3 gap-0">
            <div className="mx-auto my-auto">🌹</div>
             <Pixelify
                src={src}
                pixelSize={pixelSize[stage]}
            />
            <div className="mx-auto my-auto">🧡</div>
        </div>
    )
}