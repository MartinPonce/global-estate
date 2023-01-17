import React, { useState } from 'react'

export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: "",
        description: "",
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
    });
    const { 
        type, 
        name, 
        bedrooms, 
        bathrooms, 
        parking, 
        furnished, 
        address, 
        description, 
        offer, 
        regularPrice,
        discountedPrice,
    } = formData;
    function onChange() {}
  return (
    <main className="max-w-md px-2 mx-auto">
        <h1 className="text-3xl text-center mt-6 font-bold">Creación del Listado</h1>
        <form>
            <p className="text-lg mt-6 mb-1 font-semibold">Propiedad en Venta / Alquiler</p>
            <div className="flex">
                <button 
                    type="button" 
                    id="type" 
                    value="sale" 
                    onclick={onChange} 
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase 
                    shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
                    w-full ${
                    type === "rent" ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                Venta
                </button>
                <button type="button" 
                    id="type" 
                    value="sale" 
                    onclick={onChange} 
                    className={`ml-3 px-7 py-3 font-medium text-sm uppercase 
                    shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
                    w-full ${
                    type === "venta" ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                Alquiler
                </button>
            </div>
            <p className="text-lg mt-6 font-semibold">
                Nombre
            </p> 
            <input 
                type="text" 
                id="name" 
                value={name} 
                onChange= {onChange} 
                placeholder="Nombre de agente e Inmobiliaria" //Property name
                maxLength="32"
                minLenght="10" 
                required className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded 
                    transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600
                    mb-6 " 
            />
            <div className="flex space-x-6 mb-6">
                <div>
                    <p className="text-lg font-semibold">Habitaciones</p>
                    <input 
                        type="number" 
                        id="bedrooms" 
                        value={bedrooms} 
                        onChange={onChange} 
                        min="1" max="50"
                        required 
                        className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
                        transition duration-150 ease-in-out focus:text-gray700 focus:bg-white
                        focus:border-slate-600 text-center"
                    />
                </div>            
                <div>
                    <p className="text-lg font-semibold">Baños</p>
                    <input 
                        type="number" 
                        id="bathrooms" 
                        value={bathrooms} 
                        onChange={onChange} 
                        min="1" max="50"
                        required 
                        className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded
                        transition duration-150 ease-in-out focus:text-gray700 focus:bg-white
                        focus:border-slate-600 text-center"
                    />
                </div>            
            </div>
            <p className="text-lg mt-6 mb-1 font-semibold">Estacionamiento</p>
            <div className="flex">
                <button     
                    type="button" 
                    id="parking" 
                    value={true} 
                    onclick={onChange} 
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase 
                    shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
                    w-full ${
                    !parking ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                Si 
                </button>
                <button 
                    type="button" 
                    id="parking" 
                    value="false" 
                    onclick={onChange} 
                    className={`ml-3 px-7 py-3 font-medium text-sm uppercase 
                    shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
                    w-full ${
                    parking ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                No 
                </button>
            </div>
            <p className="text-lg mt-6 mb-1 font-semibold">Amoblada</p>
            <div className="flex">
                <button 
                    type="button" 
                    id="furnished" 
                    value={true} 
                    onclick={onChange} 
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase 
                    shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
                    w-full ${
                    !furnished ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                Si 
                </button>
                <button 
                    type="button" 
                    id="furnished" 
                    value={false} 
                    onclick={onChange} 
                    className={`ml-3 px-7 py-3 font-medium text-sm uppercase 
                    shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
                    w-full ${
                    furnished ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                No
                </button>
            </div>
            <p className="text-lg mt-6 font-semibold">
                Dirección
            </p> 
            <textarea 
                type="text" 
                id="address" 
                value={address} 
                onChange= {onChange} 
                placeholder="Direccion del inmueble" //Property name
                required 
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded 
                    transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600
                    mb-6 " 
            />
            <p className="text-lg  font-semibold">
                Descripción
            </p> 
            <textarea 
                type="text" 
                id="description" 
                value={description} 
                onChange= {onChange} 
                placeholder="Descripción del inmueble" //Property name
                required 
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded 
                    transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600
                    mb-6 " 
            />
            <p className="text-lg  mb-1 font-semibold">Oferta</p>
            <div className="flex mb-6">
                <button 
                    type="button" 
                    id="offer" 
                    value={true} 
                    onclick={onChange} 
                    className={`mr-3 px-7 py-3 font-medium text-sm uppercase 
                    shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
                    w-full ${
                    !offer ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                Si 
                </button>
                <button 
                    type="button" 
                    id="offer" 
                    value={false} 
                    onclick={onChange} 
                    className={`ml-3 px-7 py-3 font-medium text-sm uppercase 
                    shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out
                    w-full ${
                    offer ? "bg-white text-black" : "bg-slate-600 text-white"
                    }`}
                >
                No
                </button>
            </div>
            <div className="flex items-center mb-6">
                <div className="">
                    <p className="text-lg font-semibold">Precio regular</p>
                    <div className="flex w-full justify-center items-center space-x-6">
                        <input 
                            type="number" 
                            id="regularPrice"
                            value={regularPrice} 
                            onChange={onChange} 
                            min="5000"
                            max="500000000"
                            required
                            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded
                            transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600
                            text-center"
                        />
                        {type === "rent" && (
                            <div className="">
                                <p className="text-md w-full whitespace-nowrap ">$ / Mes</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {offer && (
                <div className="flex items-center mb-6">
                    <div className="">
                        <p className="text-lg font-semibold">Precio con decuento</p>
                        <div className="flex w-full justify-center items-center space-x-6">
                            <input 
                                type="number" 
                                id="discountedPrice"
                                value={discountedPrice} 
                                onChange={onChange} 
                                min="5000"
                                max="500000000"
                                required={offer}
                                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded
                                transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600
                                text-center"
                            />
                            {type === "rent" && (
                                <div className="">
                                    <p className="text-md w-full whitespace-nowrap ">$ / Mes</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className="mb-6">
                <p className="text-lg font-semibold">Fotos</p>
                <p className="text-gray-600">La primera foto será la de portada (max 8)</p>
                <input 
                    type="file"  
                    id="images" 
                    onChange={onChange} 
                    accept=".jpg,.png,jpeg"
                    multiple
                    required
                    className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded
                        transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
                />
            </div>
            <button type="submit" className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm
                uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
                active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Crear Listado
            </button>
        </form>   
    </main>
  )
}
