import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = ({params}:any) => {

    return (
        <div>
            <h1>Have a good coding</h1>
            <h1>Params : {params.id}</h1>
        </div>
    )
}
export default page;