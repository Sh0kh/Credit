import {
    Card,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function ClientDetail() {
    const client = {
        name: "Islom Karimov",
        phone: "+998 90 123 45 67",
        address: "Toshkent shahri, Navoiy ko'chasi, 12-uy",
        photo: "https://i.ibb.co/fY2Ypyk/default-user.png", // Oddiy fon rasmi
    };

    const deals = [
        {
            title: "Samsung Galaxy smartfoni",
            image: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/82bc0c2caf19f994a74a9cd139aa23ff2025012414253450747o8Q7DhAPRD.webp", // Bo‘sh, default rasm ishlatiladi
            price: "3 200 000 so'm",
            date: "15.06.2025",
        },
        {
            title: "LG 43” Smart televizori",
            image: "https://cdn.mediapark.uz/imgs/600x600_3dcb5c04-ae6a-4b8a-b29c-871ec7eaab63_TV11300.webp",
            price: "5 500 000 so'm",
            date: "03.05.2025",
        },
    ];

    const defaultProductImage = "https://via.placeholder.com/150?text=Mahsulot";

    return (
        <div className="mx-auto space-y-6 mt-[90px]">
            {/* Mijoz ma'lumotlari */}
            <Card className="flex flex-col md:flex-row items-center gap-6 p-4">
                <Avatar
                    src={client.photo}
                    alt="Mijoz rasmi"
                    size="xxl"
                    className="rounded-lg"
                />
                <CardBody className="w-full">
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {client.name}
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                        📞 Telefon: {client.phone}
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                        📍 Manzil: {client.address}
                    </Typography>
                </CardBody>
            </Card>

            {/* Kredit asosida olingan mahsulotlar */}
            <div className="space-y-4">
                <Typography variant="h6" color="blue-gray">
                    Kredit asosida olingan mahsulotlar
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {deals.map((deal, index) => (
                        <NavLink to={`/order/detail`}>
                            <Card key={index} className="p-4 flex gap-4 items-center">
                                <img
                                    src={deal.image || defaultProductImage}
                                    alt={deal.title}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div>
                                    <Typography variant="h6">{deal.title}</Typography>
                                    <Typography variant="small" color="gray">
                                        💰 Narxi: {deal.price}
                                    </Typography>
                                    <Typography variant="small" color="gray">
                                        📅 Sana: {deal.date}
                                    </Typography>
                                </div>
                            </Card>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}
