import { useState } from "react";
import { GrAddCircle, GrLinkNext } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BiArrowBack } from "react-icons/bi";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: "groceries", isChecked: false },
    { id: 2, text: "coles", isChecked: false },
    { id: 3, text: "woolies", isChecked: false },
  ]);

  const [tempItems, setTempItems] = useState<
    { id: number; text: string; isChecked: boolean }[]
  >([]);

  const [inputItem, setInputItem] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    // Check if the input value is not empty
    if (inputValue.trim() !== "") {
      // Generate a unique ID for the new item
      const newItemId = Math.max(...items.map((item) => item.id), 0) + 1;

      // Create a new item object
      const newItem = {
        id: newItemId,
        text: inputValue,
        isChecked: false,
      };

      // Update the items state with the new item
      setItems([...items, newItem]);

      // Clear the input field and reset the input state
      setInputValue("");

      // Hide the input field
      setInputItem(false);
    }
  };

  const handleTransferItemRight = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setItems(updatedItems);
  };

  const handleTransferItemLeft = (id: number) => {
    const updatedItems = tempItems.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setTempItems(updatedItems);
  };

  const handleShiftRight = () => {
    const checkedItems = items.filter((item) => item.isChecked);
    setItems(items.filter((item) => !item.isChecked));
    setTempItems([...tempItems, ...checkedItems]);
  };

  const handleShiftLeft = () => {
    const uncheckedItems = tempItems.filter((item) => !item.isChecked);
    setItems([...items, ...uncheckedItems]);
    setTempItems(tempItems.filter((item) => item.isChecked));
  };

  return (
    <div className="flex justify-evenly items-center w-full h-[100vh]">
      <div className="w-[70%] flex justify-evenly items-start">
        <div className="flex flex-col justify-center gap-5 w-fit">
          <div className="text-3xl text-center flex flex-col justify-start items-start border border-black px-3 py-3 rounded-lg min-h-[133px] min-w-[200px]">
            {items
              .sort((a, b) => a.text.localeCompare(b.text))
              .map((item) => (
                <div
                  className=" flex justify-center items-center gap-4"
                  key={item.id}
                >
                  <input
                    type="checkbox"
                    onClick={() => handleTransferItemRight(item.id)}
                  />
                  {item.text}
                </div>
              ))}
          </div>
          {inputItem ? (
            <div className="flex justify-center items-center gap-3">
              <input
                type="text"
                autoFocus
                name="itemName"
                className="border border-black"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />
              <div onClick={() => setInputItem(false)}>
                <MdOutlineCancel />
              </div>
              <div onClick={addItem}>
                <TiTick />
              </div>
            </div>
          ) : null}

          <button
            className="flex gap-2 items-center"
            onClick={() => setInputItem(true)}
          >
            <GrAddCircle />
            add items
          </button>
        </div>

        <div className="flex flex-col gap-5 w-fit">
          <button
            className="relative h-[40px] w-20 overflow-hidden border border-black rounded-full px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-sky-400 before:transition-all before:duration-500 hover:text-whit hover:before:left-0 hover:before:w-full"
            onClick={handleShiftRight}
          >
            <span className="relative z-10 text-2xl flex justify-center items-center">
              <GrLinkNext />
            </span>
          </button>
          <button
            className="relative h-[40px] w-20 overflow-hidden border border-black rounded-full px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-sky-400 before:transition-all before:duration-500 hover:text-whitehover:before:right-0 hover:before:w-full"
            onClick={handleShiftLeft}
          >
            <span className="relative z-10 text-3xl flex justify-center items-center">
              <BiArrowBack />
            </span>
          </button>
        </div>

        <div className="text-3xl text-center flex flex-col justify-start items-start border border-black px-3 py-3 rounded-lg min-h-[133px] min-w-[200px] w-fit">
          {tempItems
            .sort((a, b) => a.text.localeCompare(b.text))
            .map((item) => (
              <div
                className=" flex justify-center items-center gap-4"
                key={item.id}
              >
                <input
                  type="checkbox"
                  onClick={() => handleTransferItemLeft(item.id)}
                />
                {item.text}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
