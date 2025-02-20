
const StopModal = ({campaignName}) => {
  return (
      <div className="opacity-5">

    <div className="bg-blue-400 w-[572px] h-[353px] rounded-md absolute top-[180px] ml-[311px]">
      <h2 className="text-center text-2xl">Stop Campaign?</h2>
      <p className="text-center text-xl">Are You sure you want to delete {campaignName} campaign?
This action cannot be undone.</p>
    </div>
    </div>
  )
}

export default StopModal