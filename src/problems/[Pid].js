import React from 'react'
import WorkSpace from './WorkSpace';
import { problems } from './ProblemList';
import useHasMounted from '../hooks/useHasMounted';


const ProblemPage = (props, {problem}) => {
  const hasMounted = useHasMounted()
	if(!hasMounted) return null;
  return (
    <div className=''  >
      {props.setnavTrue()}
      <WorkSpace problem={props.problemQ} />
    </div>
  )
}
export default ProblemPage;

export async function getStaticPaths(){
  const paths=Object.keys(problems).map((key)=>({
    params:{pid:key}
  }))
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({params}){
  const {Pid} = params;
  const problem = problems[Pid];
  console.log("params: "+params);
  console.log(problem);
  if(!problem){
    return {
      notFound:true
    }
  } 
  return {
    props :{
      problem
    }
  }
}