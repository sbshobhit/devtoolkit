import RootLayout from "@/components/layout/RootLayout";
import Hero from "@/components/section/Hero";
import ToolBox from "@/components/ui/ToolBox";
import { LuFileJson2 } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaShieldVirus } from "react-icons/fa";

export default function HomePage() {
  const tools = [
    {"name": "JSON", "icon": LuFileJson2},
    {"name": "Password Generator", "icon": RiLockPasswordLine},
    {"name": "UUID Generator", "icon": FaShieldVirus},
  ]
  const section = (
    <>
    <Hero />   
    <div className="flex items-center gap-16 flex-wrap grid-cols-4 md:grid-cols-4 lg:grid-cols-4 p-12 justify-center">
      {tools.map((item, _id) => (<ToolBox key={_id} icon={<item.icon className="w-44 h-44" />} name={item.name}/>))}
    </div>
    </>
  )
  return (
      <RootLayout section={section}/>
  );
}
