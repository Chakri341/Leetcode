import Topbar from '@/components/Topbar/Topbar';
import WorkSpace from '@/components/WorkSpace/WorkSpace';
import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = ({ params }: any) => {

    return (
        <div>
            <Topbar problemPage={true} />
            {/* <h1>Params : {params.id}</h1> */}
            <WorkSpace />
        </div>
    )
}
export default page;