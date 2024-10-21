import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <Topbar/>
     <ProblemsTable/>
    </div>
  );
}
