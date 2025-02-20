import { IoSettingsOutline } from "react-icons/io5"

const AccountSetting = () => {
  return (
    <div>
      <div className="hover:bg-buttonColor hover:text-white cursor-pointer text-left w-40 flex items-center py-2 mt-2 rounded-md">
            <IoSettingsOutline className="mr-5" /> Account Setting
          </div>
    </div>
  )
}

export default AccountSetting