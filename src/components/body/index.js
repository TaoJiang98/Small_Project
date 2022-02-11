import { useState } from "react";
import Card from "../card";

import bibimbap from '../asset/bibimbap.png';

function Body() {

    const [list, setList] = useState([
        {
            name: "Bibimbap",
            price: "$12.5",
            description: "Vegetarian option and gluten free. Rice with stir-fried onion, carrot, shiitake mushroom, bean sprout, zucchini, kale, topped with sunny side egg and your choice of beef, spicy pork, chicken, organic tofu(V), and seafood.",
            picture: bibimbap
        },
        {
            name: "Budae Jjigae",
            price: "$14.5",
            description: "Spicy. Kimchi stew with spam, sausage, pork, and tofu. Served with rice and banchan.",
            picture: bibimbap
        },
        {
            name: "Soondubu Jjigae",
            price: "$12.5",
            description: "Spicy. Soft tofu with seafood or kimchi and pork. Served with rice and banchan.",
            picture: bibimbap
        }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [foodName, setFoodName] = useState("");
    const [foodPrice, setFoodPrice] = useState("");
    const [foodDescription, setFoodDescription] = useState("");

    const handleSubmit = () => {
        var newFood = {
            name: foodName,
            price: foodPrice,
            description: foodDescription
        }
        setList([...list, newFood])
    }

    const handleFoodName = (value) => {
        //console.log(value);
        setFoodName(value);
    }

    const handleFoodPrice = (value) => {
        //console.log(value);
        setFoodPrice("$" + value)
    }

    const handleFoodDescription = (value) => {
        console.log(value);
        setFoodDescription(value);
    }

    return(
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {
                        list.map((food) =><Card name={food.name} price={food.price} description={food.description} picture={food.picture}/>)
                    }
                </div>
            </div>
            <div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button"
                onClick={() => setShowModal(true)}>Add a food</button>
            </div>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Add your favorite food
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="w-full max-w-xs input-body">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="foodname">
                                    Food Name
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="foodname" type="text" onChange={(e) => handleFoodName(e.target.value)} />
                                </div>
                                <div class="mb-6">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="foodprice">
                                    Food Price
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="foodprice" type="text" onChange={(e) => handleFoodPrice(e.target.value)}/>
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="fooddescription">
                                    Food Description
                                </label>
                                <textarea
                                    class="
                                        form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                    id="fooddescription"
                                    rows="3"
                                    placeholder="Description" 
                                    onChange={(e) => handleFoodDescription(e.target.value)}
                                    />
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                                setShowModal(false)
                                handleSubmit()
                            }}
                        >
                            Submit
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </section>
        
    )
}

export default Body;