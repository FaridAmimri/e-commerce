/** @format */

import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile, tablet } from '../responsive'

function CategoryList() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default CategoryList

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: 0, flexDirection: 'column' })};
  ${tablet({ flexDirection: 'column' })}
`
