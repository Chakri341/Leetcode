import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="">
     <Topbar/>
     <ProblemsTable/>
     <Link href='/add' className="mt-4 text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded shadow-md flex justify-center w-full max-w-xs mx-auto mb-10">
				Add Problem
			</Link>
    </div>
  );
}
