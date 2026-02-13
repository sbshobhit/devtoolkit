import type { IconType } from '@react-icons/lib/index'

interface TookBoxProps {
    icon: IconType,
    name: string
}

export default function ToolBox({icon, name}: TookBoxProps) {
  return (
    <>
    <div className="border-2 group relative aspect-square w-56 rounded-lg shadow-lg overflow-hidden">
    <div className=" overflow-hidden items-center justify-between">
    <center>
    {icon}
    <h5 className="text-lg font-bold">{name}</h5>
    </center>
    </div>
    </div>
    </>
  );
}
