

function Statscard({icon, title, value, trend}){

    return (
        <>
        <div className=" bg-white shadow-sm rounded-xl p-4 flex flex-col gap-2 border">
          <div className="flex items-center space-x-2 text-gray-600">  <span className="text-2xl">{icon}</span> <p className="text-sm font-medium">{title}</p> </div>
          <p className="text-3xl font-bold text-gray-900">{value}</p><br/>
          <p className="text-sm text-green-600">{trend}</p>

        </div>
        </>
    )
}

export default Statscard