 "use client"
import React, { useState } from "react";
import PreferenceNav from "../WorkSpace/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark, vscodeLight } from "@uiw/codemirror-theme-vscode"; 
import { javascript } from "@codemirror/lang-javascript";
import SubmitCode from "../SubmitCode/SubmitCode";

type PlaygroundProps = {
	
};

const CodePlayground: React.FC<PlaygroundProps> = () => {
	const [isDarkMode, setisDarkMode] = useState(false);
	return (
		<div className="flex flex-col relative overflow-x-hidden h-full bg-white"> 
			<PreferenceNav isDarkMode={isDarkMode}  setisDarkMode={setisDarkMode} />

			<Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
				<div className="w-full h-full overflow-auto "> 
					<CodeMirror
						value="const a = 1"
						theme={isDarkMode ? vscodeDark : vscodeLight} 
						extensions={[javascript()]}
						style={{ 
							fontSize: 16, 
							height: "100%", 
							backgroundColor: isDarkMode ? "#000" :  '#fff',  
							color: isDarkMode ? "#fff" : "#000", 
						}} 
					/>
				</div>

				<div className="w-full px-5 overflow-auto">
					{/* Testcase heading */}
					<div className="flex h-10 items-center space-x-6">
						<div className="relative flex h-full flex-col justify-center cursor-pointer">
							<div className="text-sm font-medium leading-5 text-black">Testcases</div> {/* Black text */}
							<hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-black" />
						</div>
					</div>

					{/* Example test cases */}
					<div className="flex mt-2">
						<div className="mr-2 items-start" onClick={() => console.log("hiiii")}>
							<div className="flex flex-wrap items-center gap-y-4">
								<div
									className="font-medium items-center transition-all focus:outline-none inline-flex bg-gray-200 hover:bg-gray-400 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap text-gray-600"
								>
									Case {5}
								</div>
							</div>
						</div>
					</div>

					<div className="font-semibold my-4">
						<p className="text-sm font-medium mt-4 text-black">Input:</p> {/* Black text */}
						<div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-gray-200 border-transparent text-black mt-2">
							{"hi 1"}
						</div>

						<p className="text-sm font-medium mt-4 text-black">Output:</p> {/* Black text */}
						<div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-gray-200 border-transparent text-black mt-2">
							{"hi 2 "}
						</div>
					</div>
				</div>
			</Split>

			<SubmitCode />
		</div>
	);
};

export default CodePlayground;
