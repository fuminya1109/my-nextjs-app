import React, { FunctionComponent, ReactNode } from 'react'
import TreeNode from './TreeNode'
import {treeDataInfo} from '../types/treeDataInfo'

type Props = {
  treeData: treeDataInfo[]
}

const Tree:FunctionComponent<Props> = ({treeData}) => {
  return(<ul>
      {treeData.map((data) => (
        <TreeNode treeData={data} key={data.name} />
      ))}
    </ul>)

}

export default Tree;