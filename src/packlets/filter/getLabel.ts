export const getLabel = (filter: boolean | null) =>
  filter === null ? 'All' : filter ? 'Done' : 'Undone'
