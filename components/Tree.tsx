import React, { FunctionComponent, ReactNode } from 'react'
import TreeNode from './TreeNode'

type data = {
  name: string,
  children: object[]
}

type Props = {
  treeData: data[]
}

const Tree:FunctionComponent<Props> = ({treeData}) => {
  return(<ul>
      {treeData.map((data) => (
        <TreeNode treeData={data} key={data.name} />
      ))}
    </ul>)

}

export default Tree;