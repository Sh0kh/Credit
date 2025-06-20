import {
    Card,
    CardBody,
    Typography,
    Avatar,
    Button,
} from "@material-tailwind/react";

export default function OrderDetail() {
    const client = {
        name: "Shavkat Karimov",
        phone: "+998 90 123 45 67",
        address: "Samarqand, Amir Temur ko'chasi, 25",
        photo: "https://i.ibb.co/fY2Ypyk/default-user.png",
    };

    const product = {
        title: "iPhone 14 Pro",
        price: 15000000,
        image: "https://minapi.beemarket.uz/prod-media/productImages/1726834060TwbMtMgFOQZk.webp",
        totalCredit: 15000000,
        paidAmount: 4500000,
        monthlyPayment: 1250000,
        description: "iPhone 14 Pro - zamonaviy dizayn va kuchli kamera bilan jihozlangan flagman smartfon.",
    };

    const paymentHistory = [
        { month: "May 2025", amount: 1250000 },
        { month: "April 2025", amount: 1250000 },
        { month: "March 2025", amount: 2000000 },
    ];

    const remainingAmount = product.totalCredit - product.paidAmount;

    return (
        <div className=" mx-auto px-4 py-8 space-y-6 mt-[90px]">
            {/* Mijoz haqida */}
            <Card className="flex flex-col md:flex-row items-center gap-6 p-4">
                <Avatar
                    src={client.photo}
                    size="xxl"
                    alt="User"
                    className="rounded-lg"
                />
                <CardBody>
                    <Typography variant="h5" color="blue-gray">
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

            <Card className="p-4">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full md:w-64 h-64 object-cover rounded-xl"
                    />
                    <div className="flex-1 space-y-2">
                        <Typography variant="h5">{product.title}</Typography>
                        <Typography className="text-gray-600 text-sm">
                            {product.description}
                        </Typography>
                        <Typography variant="small" className="mt-2">
                            💰 Narxi:{" "}
                            <span className="font-semibold">
                                {product.price.toLocaleString()} so'm
                            </span>
                        </Typography>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            <div>
                                <Typography color="gray">Umumiy kredit</Typography>
                                <Typography>{product.totalCredit.toLocaleString()} so'm</Typography>
                            </div>
                            <div>
                                <Typography color="gray">To‘langan</Typography>
                                <Typography>{product.paidAmount.toLocaleString()} so'm</Typography>
                            </div>
                            <div>
                                <Typography color="gray">Qolgan</Typography>
                                <Typography className="text-red-500">
                                    {remainingAmount.toLocaleString()} so'm
                                </Typography>
                            </div>
                        </div>
                        <div className="mt-4">
                            <Typography color="gray">Oylik to‘lov</Typography>
                            <Typography className="mb-4">
                                {product.monthlyPayment.toLocaleString()} so'm / oy
                            </Typography>
                            <Button color="green">💳 Shu oy uchun to‘lash</Button>
                        </div>
                    </div>
                </div>
            </Card>

            {/* To‘lov tarixi */}
            <Card className="p-4">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    To‘lov tarixi
                </Typography>
                <ul className="space-y-2">
                    {paymentHistory.map((payment, index) => (
                        <li key={index} className="flex justify-between text-sm">
                            <span>{payment.month}</span>
                            <span>{payment.amount.toLocaleString()} so'm</span>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
}
