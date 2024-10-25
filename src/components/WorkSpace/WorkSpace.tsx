"use client"
import React from 'react';
import Split from 'react-split';
import ProblemDescription from '../ProblemDescription/ProblemDescription';
import CodePlayground from '../CodePlayground/CodePlayground';

type WorkSpaceProps = {

};

const WorkSpace: React.FC<WorkSpaceProps> = () => {

    return (
        <div>
            <Split
            className="split h-screen"
        >
            <ProblemDescription/>
            <CodePlayground/>
        </Split>
        
        </div>
    )
}
export default WorkSpace;
