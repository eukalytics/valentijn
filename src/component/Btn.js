export default function Btn({incrStage}) {
    const handleNee = () => {
        alert("kenny has run the data and it looks like you clicked no by accident. so we changed it to yes for you");
        incrStage()
    }
    return(
        <div className="text-center mt-10">
             <button 
                className="
                    text-gray-200 border-2 border-gray-200 rounded-md p-4 text-lg mr-2
                    hover:text-black hover:bg-gray-200 focus:text-black focus:bg-gray-200
                "
                onClick={handleNee}
            >
                No
            </button>
            <button 
                className="
                    text-red-500 border-2 border-red-500 rounded-md p-4 text-lg ml-2
                    hover:text-black hover:bg-red-500 focus:text-black focus:bg-red-500
                "
                onClick={incrStage}
            >
                Yes!
            </button>
        </div>
    )
}