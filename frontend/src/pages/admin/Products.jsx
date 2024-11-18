import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductsFormElements } from "@/config";
import ProductImageUpload from "@/components/admin/image-upload";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, deleteProduct, editProduct, fetchAllProducts } from "@/store/productSlice";
import AdminProductTile from "@/components/admin/ProductTile";

function AdminProducts() {
  const [openCreateProducts, setOpenCreateProducts] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: "",
  });
  const [imageLoading, setImageLoading] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null)
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.adminProducts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    currentEditedId !== null ? 
      dispatch(editProduct({id: currentEditedId, formData}))
      .then((data) => {
        console.log(data);
        if (data.payload.success) {
          dispatch(fetchAllProducts())
          setFormData({
            image: null,
            title: "",
            description: "",
            category: "",
            brand: "",
            price: "",
            salePrice: "",
            totalStock: "",
          });
          setOpenCreateProducts(false);
          setCurrentEditedId(null)
        }
        
      }) :
    
    dispatch(
      addNewProduct({
        ...formData,
        image: uploadedImageUrl,
      })
    ).then((data) => {
      console.log(data);
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        setFormData({
          image: null,
          title: "",
          description: "",
          category: "",
          brand: "",
          price: "",
          salePrice: "",
          totalStock: "",
        });

        setImageFile(null);
        setUploadedImageUrl("");
        setOpenCreateProducts(false);
      }
    });
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleDelete = (getCurrentProductId) => {
    console.log(getCurrentProductId);
    dispatch(deleteProduct(getCurrentProductId))
    .then((data) => {
      if(data?.payload?.success) {
        dispatch(fetchAllProducts());
      }
    })
    
  }

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button
          onClick={() => setOpenCreateProducts(true)}
          className="bg-black"
        >
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productList && productList.length > 0
          ? productList.map((product) => (
              <AdminProductTile
                setOpenCreateProducts={setOpenCreateProducts}
                setCurrentEditedId={setCurrentEditedId}
                setFormData={setFormData}
                product={product}
                handleDelete = {handleDelete}
              />
            ))
          : null}
      </div>
      <Sheet
        open={openCreateProducts}
        onOpenChange={() => {
          setOpenCreateProducts(false);
          setCurrentEditedId(null);
          setFormData({
            image: null,
            title: "",
            description: "",
            category: "",
            brand: "",
            price: "",
            salePrice: "",
            totalStock: "",
          });
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              {currentEditedId !== null ? "Edit Product" : "Add Product"}
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoading={setImageLoading}
            imageLoading={imageLoading}
            isEditMode={currentEditedId !== null}
          />
          <div className="py-6 ">
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg"
            >
              {addProductsFormElements.map((element) => {
                switch (element.componentType) {
                  case "input":
                    return (
                      <div key={element.name} className="mb-4">
                        <label
                          htmlFor={element.name}
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          {element.label}
                        </label>
                        <input
                          type={element.type}
                          id={element.name}
                          name={element.name}
                          placeholder={element.placeholder}
                          value={formData[element.name]}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    );

                  case "textarea":
                    return (
                      <div key={element.name} className="mb-4">
                        <label
                          htmlFor={element.name}
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          {element.label}
                        </label>
                        <textarea
                          id={element.name}
                          name={element.name}
                          placeholder={element.placeholder}
                          value={formData[element.name]}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>
                    );

                  case "select":
                    return (
                      <div key={element.name} className="mb-4">
                        <label
                          htmlFor={element.name}
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          {element.label}
                        </label>
                        <select
                          id={element.name}
                          name={element.name}
                          value={formData[element.name]}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select {element.label}</option>
                          {element.options.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    );

                  default:
                    return null;
                }
              })}

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-50"
                >
                  {currentEditedId !== null ? "Edit" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default AdminProducts;
