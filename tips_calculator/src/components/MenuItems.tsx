import { MenuItem } from "../types"

type MenuItemsProps = {
    item : MenuItem,
    addItem : (item : MenuItem) => void
}

export default function MenuItems( {item, addItem} : MenuItemsProps) {
  return (
    <button
        className="border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg rounded-lg flex justify-between w-full"
        onClick={ () => addItem(item) }
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
