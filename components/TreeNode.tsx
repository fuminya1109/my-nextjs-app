import React, { FunctionComponent } from 'react'
import Tree from '../components/Tree'
import {treeDataInfo} from '../types/treeDataInfo'

type Props = {
  treeData: treeDataInfo
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