import React from "react";
import {
    Button,
    Typography,
    Card,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function Product() {
    const product = {
        name: "Samsung Galaxy A54",
        description:
            "Yorqin AMOLED displey va 120 Gts yangilanish tezligi bilan yuqori unumdorlikdan bahramand bo‘ling. 5000 mA·soatli akkumulyator 2 kungacha ishlashni ta’minlaydi. 50 MP asosiy kamera hatto yomon yoritilgan joylarda ham tiniq va yorqin suratlar oladi.",
        price: "3 500 000 so'm",
        image:
            "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/fa798b88b87ecc1e75eefba3df85c2072024031418494072118nZ8xYjddUp.png.webp",
    };

    return (
        <div className="min-h-screen mt-[20px] flex items-center justify-center">
            <Card className="w-full bg-white rounded-xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
                {/* Rasmlar bo‘limi */}
                <div className="w-full lg:w-1/2 bg-gray-200">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Ma'lumotlar bo‘limi */}
                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
                    <CardBody className="flex-1">
                        <Typography variant="h3" color="blue-gray" className="font-bold mb-4">
                            {product.name}
                        </Typography>
                        <Typography variant="h5" color="green" className="font-semibold mb-4">
                            {product.price}
                        </Typography>
                        <Typography className="text-gray-700 text-base">
                            {product.description}
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-6 flex items-center justify-between gap-[20px]">
                        <NavLink className={'w-full'} to={'/sell'}>
                            <Button color="blue" size="lg" fullWidth ripple>
                                SOTISH
                            </Button>
                        </NavLink>
                        <NavLink to={`/sell/credit`} className={'w-full'}>
                            <Button color="blue" size="lg" fullWidth ripple>
                                Credit asosida sotish
                            </Button>
                        </NavLink>
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
}
