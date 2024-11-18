import React, {useEffect, useState} from 'react'
import { Checkbox } from "@/components/ui/checkbox";
import { Sidebar } from '@/components/user/Sidebar';
import { SearchBar } from '@/components/user/Searchbar';
import { ProductCard } from '@/components/user/ProductCard';
import { Pagination } from '@/components/user/Pagination';
import { CategorySection } from '@/components/user/CategorySection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '@/store/productSlice';
import { Satellite } from 'lucide-react';


function ListingProducts() {

    const { productList } = useSelector((state) => state.adminProducts);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  },[])
  const [category, setCategory] = useState("All");

 return (
   <div className="min-h-screen bg-gray-100">
     <div className="bg-light py-3">
       <div className="container mx-auto px-4"></div>
     </div>

     <div className="container mx-auto py-12 px-4 flex">
       <Sidebar />

       <div className="flex-1">
         <SearchBar />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
           {productList && productList.length > 0 ?
             productList.map((product) => (
             <ProductCard  product={product}/>)) : null}
         </div>
         <Pagination />
       </div>
     </div>

     <CategorySection />
   </div>
 );
}

export default ListingProducts