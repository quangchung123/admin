import {sideBarOptions} from "../config";
import ButtonSidebar from "../components/Field/ButtonSidebar";

const Sidebar = () => {
  return (
    <ul>
      {sideBarOptions.map((item, index) => {
        // const active =
        return (
          <ButtonSidebar
            key={index}
            route={item.route}
            className={`flex items-center px-2 py-3 mt-1 rounded hover:bg-accent group cursor-pointer`}
          >
            <span
              dangerouslySetInnerHTML={{ __html: `${item.icon}` }}
              className="text-icon text-xl mr-2"
            ></span>
            <span className="font-bold opacity-80 text-base">{item.name}</span>
          </ButtonSidebar>
       )})}
    </ul>
  )
}
export default Sidebar;