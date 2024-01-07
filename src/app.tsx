import { Button as FilterButton } from '$filter/button'
import { Heading } from '$layout/heading'
import { Progress } from '$layout/progress'
import { List } from '$list/list'
import { Form } from '$todo/form'

export const App = () => {
  return (
    <div>
      <Progress />
      <Heading>
        <FilterButton />
      </Heading>
      <List />
      <Form action="add" />
    </div>
  )
}
