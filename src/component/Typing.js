import Typewriter from 'typewriter-effect';


export default function Typing({text}) {
    return (
        <h1 className="text-red-500 text-5xl text-center">
            <Typewriter
                options={{
                    strings: [text],
                    autoStart: true,
                    loop: false,
                }}
            />
        </h1>
    )
}