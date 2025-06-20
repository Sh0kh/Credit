import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import BoxCreate from "./BoxCreate";
import BoxEdit from "./BoxEdit";
import BoxDelete from "./BoxDelete";
import { NavLink } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923778669",
    price: 1200,
    months: 12,
    monthly: 110,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    image: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/82bc0c2caf19f994a74a9cd139aa23ff2025012414253450747o8Q7DhAPRD.webp",
    price: 950,
    months: 10,
    monthly: 105,
  },
  {
    id: 3,
    name: "MacBook Air M2",
    image: "https://cdn.mediapark.uz/imgs/d108268a-1706-462d-81fb-c468c7ad081b_Artboard-51300.webp",
    price: 1600,
    months: 18,
    monthly: 95,
  },
  {
    id: 4,
    name: "iPad Pro 12.9",
    image: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/d71ccb4491e34549d223c29109232e6020241218113722307929vrLuP74Eb.jpg",
    price: 1300,
    months: 12,
    monthly: 115,
  },
  {
    id: 5,
    name: "PlayStation 5",
    image: "https://assets.asaxiy.uz/product/items/desktop/18901122fea46bca8bf3cf5db40021fd2020122812493287125rZGprDEtXG.jpg.webp",
    price: 700,
    months: 6,
    monthly: 125,
  },
];

export default function Box() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const handleCreate = (product) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: prev.length ? prev[prev.length - 1].id + 1 : 1 },
    ]);
    setOpenCreate(false);
  };

  const handleEdit = (product) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === product.id ? product : item))
    );
    setOpenEdit(false);
    setEditProduct(null);
  };

  const handleEditOpen = (product) => {
    setEditProduct(product);
    setOpenEdit(true);
  };

  const handleDeleteOpen = (product) => {
    setDeleteProduct(product);
    setOpenDelete(true);
  };

  const handleDelete = (productId) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
    setOpenDelete(false);
    setDeleteProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen mt-[90px] mb-[20px] px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <Typography variant="h3" className="text-gray-900 font-bold">
          Mahsulotlar ro'yxati
        </Typography>

        <Button
          color="green"
          className="flex items-center gap-2"
          onClick={() => setOpenCreate(true)}
          size="sm"
        >
          <PlusIcon className="w-5 h-5" />
          Yangi Mahsulot
        </Button>
      </div>
      <div className="w-full mt-[20px]  mb-[30px]">
        <input
          type="text"
          placeholder="Qidirish (nomi bo'yicha)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {filteredProducts.map((product) => (
          <NavLink to={'/product'}>
            <Card
              key={product.id}
              className="w-full bg-white rounded-3xl shadow-xl border border-gray-200 flex flex-col hover:shadow-2xl transition"
            >
              <CardBody className="flex flex-col items-center p-4">
                <div className="w-full mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain rounded-xl bg-gray-100"
                  />
                </div>
                <Typography
                  variant="h6"
                  className="text-gray-900 font-bold mb-2 text-center"
                >
                  {product.name}
                </Typography>
                <div className="text-gray-800 text-sm mb-1">
                  Narxi: <span className="font-semibold">{product.price} USD</span>
                </div>
                <div className="text-gray-800 text-sm mb-4">
                  Oyiga:{" "}
                  <span className="font-semibold">{product.monthly} USD</span> (
                  {product.months} oy)
                </div>
                <div className="flex gap-2 mt-auto">
                  <IconButton
                    variant="text"
                    color="blue"
                    onClick={() => handleEditOpen(product)}
                    size="sm"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </IconButton>
                  <IconButton
                    variant="text"
                    color="red"
                    onClick={() => handleDeleteOpen(product)}
                    size="sm"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </IconButton>
                </div>
              </CardBody>
            </Card>
          </NavLink>
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500 italic mt-8">
            Mahsulot topilmadi
          </div>
        )}
      </div>

      {/* Modals */}
      {openCreate && (
        <BoxCreate
          onCreate={handleCreate}
          onCancel={() => setOpenCreate(false)}
        />
      )}
      {openEdit && editProduct && (
        <BoxEdit
          product={editProduct}
          onEdit={handleEdit}
          onCancel={() => {
            setOpenEdit(false);
            setEditProduct(null);
          }}
        />
      )}
      {openDelete && deleteProduct && (
        <BoxDelete
          product={deleteProduct}
          onDelete={handleDelete}
          onCancel={() => {
            setOpenDelete(false);
            setDeleteProduct(null);
          }}
        />
      )}
    </div>
  );
}
