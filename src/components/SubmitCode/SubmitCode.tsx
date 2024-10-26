import React from "react";


type SubmitCodeProps = {
	handleSubmit?: () => void;
};

const SubmitCode: React.FC<SubmitCodeProps> = () => {
    // handleSubmit
	return (
		<div className='flex  absolute bottom-0 z-10 w-full'>
			<div className='mx-5 my-[10px] flex justify-evenly w-full'>
				<div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
					<button className='px-3 py-1.5  items-center transition-all inline-flex font-bold text-black rounded-lg pl-3 pr-2  bg-gray-400'>
						Console
					</button>
				</div>
				<div className='ml-auto flex items-center space-x-4 '>
					<button
						className='px-3 py-1.5 text-sm font-bold items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-gray-400  text-black rounded-lg'
						onClick={()=> console.log("handle click")}
					>
						Run
					</button>
					<button
						className='px-3 py-1.5 font-bold  items-center transition-all focus:outline-none inline-flex text-sm text-black bg-green-400  rounded-lg'
						onClick={()=> console.log("handle click")}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};
export default SubmitCode