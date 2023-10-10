import { BiBarChart,BiShapeSquare,BiCheckCircle} from "react-icons/bi";
import { FiMenu,FiInfo} from "react-icons/fi"
import { MdCurrencyPound} from "react-icons/md"
import { LiaClipboardCheckSolid} from "react-icons/lia"
import { BsFillCollectionPlayFill} from "react-icons/bs"
import { LuScreenShareOff} from "react-icons/lu"
import SideBarButtons from "../SideBarButtons/SideBarButtons";

const SideBarLowerSection = () => {
  return (
    <div>
      <SideBarButtons label="Dashboard" icon={<BiBarChart />}  isActive={false}/>
      <SideBarButtons label="General Information" icon={<FiInfo />} isActive={true} />
      <SideBarButtons label="Transactions" icon={<FiMenu />} isActive={false}/>
      <SideBarButtons label="Planogram" icon={<BiShapeSquare />} isActive={false}/>
      <SideBarButtons label="Pricing" icon={<MdCurrencyPound />} isActive={false}/>
      <SideBarButtons label="Stock" icon={<LiaClipboardCheckSolid />} isActive={false}/>
      <SideBarButtons label="Content" icon={<BsFillCollectionPlayFill />} isActive={false}/>
      <SideBarButtons label="Monitoring" icon={<LuScreenShareOff />} isActive={false}/>
      <SideBarButtons label="Events" icon={<FiInfo />} isActive={false}/>
      <SideBarButtons label="Checklist" icon={<BiCheckCircle />} isActive={false}/>
    </div>
  );
};

export default SideBarLowerSection;
