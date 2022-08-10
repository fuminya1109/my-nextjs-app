import type { NextPage } from 'next'
import Tree from '../components/Tree'
import {treeDataInfo} from '../types/treeDataInfo'

type Props = {
  treeData: treeDataInfo[]
}

const View: NextPage<Props> = ({treeData}) => {
  return <div>
    <Tree treeData={treeData} ></Tree>
  </div>;
}

View.getInitialProps = async () => {
  return {treeData:[{
    name: 'folder1',
    children: [
      {name: 'file1'},{name:'file2'}
    ]
  },{
    name: 'folder2',
    children:[
      {name: 'folder2-1',children:[
        {name:'file2-1'},{name:'file2-2'}
      ]}
    ]
  },{
    name:'file'
  }]};
}

export default View