import React, { FunctionComponent } from 'react'
import Tree from '../components/Tree'

type data = {
  name: string,
  children: object[]
}

type Props = {
  treeData: data
}

const TreeNode:FunctionComponent<Props> = ({treeData}) => {
  return <>
      <div>{treeData.name}</div>
      {treeData.children &&
        <ul>
          <Tree treeData={treeData.children}></Tree>
        </ul>
      }
  </>

}

export default TreeNode;