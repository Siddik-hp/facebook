import Image from "next/image"

const SidebarRow = ({ src, Icon, title, onClick }) => {
    return (
        <div className={`flex items-center space-x-2 px-3 py-2 hover:bg-gray-300 my-2 rounded-md cursor-pointer transition-transform duration-200 ease-in-out `} onClick={onClick}>
            {src && <Image src={src} width={30} height={30} alt="user"
                layout="fixed" className="rounded-full" />}
            {Icon && (
                <Icon className="w-7 h-7 text-blue-500" />
            )}
            <p className=" font-medium">{title}</p>
        </div>
    )
}

export default SidebarRow