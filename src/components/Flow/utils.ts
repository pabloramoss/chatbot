/* Returns the index of an element in the array */

export const findIndex = (array: any[], id: any) => {
  console.log(id)
  const index = array.findIndex(item => String(item.id) === String(id))
  if (index === -1 ) {
    console.error("Error, elemento no encontrado")
  } else {

    return index
  }
}

export const updateArray = (array: any[], item: any) => {
  const index = findIndex(array, item.id)
  array.splice(index!, 1, item)

  return array
}