import React from 'react';
import Topbar from '@/components/Topbar/Topbar';
import WorkSpace from '@/components/WorkSpace/WorkSpace';


type PageProps = {
   
};

const Page : React.FC<PageProps>  =  ()  => {
   

    return (
        <div>
            <Topbar problemPage={true} />
            <WorkSpace />
			
        </div>
    );
};

export default Page;













// import React from 'react';
// import Topbar from '@/components/Topbar/Topbar';
// import WorkSpace from '@/components/WorkSpace/WorkSpace';
// import { problems } from '@/utils/problems';
// import { Problem } from '@/utils/types/problem';

// type pageProps = {
//     problem:Problem;
// };

// const page: React.FC<pageProps> = ({ problem  }) => {

//     return (
//         <div>
//             <Topbar problemPage={true} />
//             {/* <h1>Params : {params.id}</h1> */}
//             <WorkSpace problem={problem}/>
//         </div>
//     )
// }
// export default page;



// // fetch the local data
// //  SSG
// // getStaticPaths => it create the dynamic routes
// export async function getStaticPaths() {
// 	const paths = Object.keys(problems).map((key) => ({
// 		params: { pid: key },
// 	}));

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

// // getStaticProps => it fetch the data

// export async function getStaticProps({ params }: { params: { pid: string } }) {
// 	const { pid } = params;
// 	const problem = problems[pid];

// 	if (!problem) {
// 		return {
// 			notFound: true,
// 		};
// 	}
// 	problem.handlerFunction = problem.handlerFunction.toString();
// 	return {
// 		props: {
// 			problem,
// 		},
// 	};
// }



