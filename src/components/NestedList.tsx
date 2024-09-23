import React from 'react'
import { List } from '@mui/material'
import { CustomNavigation } from '@/utils/navigation'
import NestedListItem from './NestedListItem'

interface NestedListProps {
  items: CustomNavigation[]
  prevSegment: string
  pathname: string
}

const NestedList: React.FC<NestedListProps> = ({
  items,
  prevSegment,
  pathname,
}) => (
  <List>
    {items.map((item) => (
      <NestedListItem
        key={item.title}
        item={item}
        prevSegment={prevSegment}
        pathname={pathname}
      />
    ))}
  </List>
)

export default NestedList