
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (

    <div className="flex">

      <div>
        <img src={item.image} width="150" />
      </div>

      <div>

        <h1>{item.title}</h1>

        <h1>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>

        <div>

          <p>{item.price}</p>

          <div
            onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>

        </div>

      </div>


    </div>

  );
};

export default CartItem;
