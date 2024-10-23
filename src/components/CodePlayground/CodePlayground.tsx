import React from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import SubmitCode from '../SubmitCode/SubmitCode';
import Split from 'react-split'

type CodePlaygroundProps = {

};

const CodePlayground: React.FC<CodePlaygroundProps> = () => {

    return (
        <div className=''>
            <Split
                className="split w-full"
                direction="vertical"
                gutterAlign="end"
            >
                <CodeEditor />
                <SubmitCode />
            </Split>
        </div>
    )
}
export default CodePlayground;