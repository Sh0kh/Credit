import React, { useState } from "react";
import {
    Card,
    CardBody,
    Typography,
    Select,
    Option,
    Input,
    Button,
} from "@material-tailwind/react";

export default function Sell() {
    const [selectedClient, setSelectedClient] = useState("");
    const [sellPrice, setSellPrice] = useState("");

    const product = {
        name: "Samsung Galaxy A54",
        price: "3 500 000 so'm",
        description:
            "Yorqin AMOLED displey, 120Hz yangilanish tezligi, kuchli batareya va 50MP kamera bilan mukammal tajriba taqdim etadi.",
        image:
            "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/fa798b88b87ecc1e75eefba3df85c2072024031418494072118nZ8xYjddUp.png.webp",
    };

    const clients = [
        { id: 1, name: "Azizbek Karimov" },
        { id: 2, name: "Dilnoza Umarova" },
        { id: 3, name: "Shahzod Olimov" },
    ];

    const handleSell = () => {
        if (!selectedClient || !sellPrice) {
            alert("Iltimos, barcha maydonlarni to‘ldiring.");
            return;
        }

        const numericPrice = parseInt(sellPrice.replace(/\s/g, ""));
        console.log("Sotildi:", { client: selectedClient, price: numericPrice });
        alert("Mahsulot muvaffaqiyatli sotildi!");
    };

    // Formatlash funksiyasi: 50000 -> 50 000
    const formatPrice = (value) => {
        const onlyNumbers = value.replace(/\D/g, "");
        return onlyNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const handlePriceChange = (e) => {
        const formatted = formatPrice(e.target.value);
        setSellPrice(formatted);
    };

    return (
        <div className="min-h-screen mt-[80px] bg-gray-50 flex flex-col gap-3 items-center px-4 py-6">
            {/* Mahsulot haqida */}
            <Card className="w-full max-w-2xl shadow-lg rounded-xl p-6">
                <div className="flex items-center gap-4 text-left">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-40 h-40 object-contain rounded-full shadow-md"
                    />
                    <div>
                        <Typography variant="h5" color="blue-gray" className="font-bold">
                            {product.name}
                        </Typography>
                        <Typography variant="h6" color="green" className="font-semibold">
                            {product.price}
                        </Typography>
                        <Typography className="text-gray-700 text-sm max-w-md">
                            {product.description}
                        </Typography>
                    </div>
                </div>
            </Card>

            {/* Savdo formasi */}
            <Card className="w-full max-w-2xl shadow-lg rounded-xl p-6">
                <div className="flex flex-col gap-6 mb-6">
                    <div>
                        <Typography className="mb-2 font-medium text-blue-gray-700">
                            Mijozni tanlang
                        </Typography>
                        <Select
                            label="Mijoz"
                            value={selectedClient}
                            onChange={(val) => setSelectedClient(val)}
                        >
                            {clients.map((client) => (
                                <Option key={client.id} value={client.name}>
                                    {client.name}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div>
                        <Typography className="mb-2 font-medium text-blue-gray-700">
                            Sotuv narxi
                        </Typography>
                        <Input
                            label="Masalan: 3 500 000"
                            type="text"
                            value={sellPrice}
                            onChange={handlePriceChange}
                        />
                    </div>
                </div>
                <Button fullWidth color="blue" size="lg" onClick={handleSell}>
                    Mahsulotni sotish
                </Button>
            </Card>
        </div>
    );
}
