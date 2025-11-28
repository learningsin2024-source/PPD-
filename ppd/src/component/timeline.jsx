

function Timeline ({icon, status, text, time}){

    return (

        <>
            <div className="flex flex-col space-y-6 border-l-4 border-gray-300 pl-6">
                    <div className="relative"><p>{text}</p></div>
                    <ul className="space-y-1">
                        <li className="absolute -left-3 top-1 w-3 h-3 rounded-full 
               bg-blue-500 flex items-center justify-center text-xs">{icon}</li>
                        <li className="font-medium text-gray-800">{text}</li>
                        <li className="text-sm text-gray-500">{time}</li>

                    </ul>





            </div>

        
        
        
        </>
    )
}

export default Timeline