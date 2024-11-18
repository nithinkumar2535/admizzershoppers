import React, { useEffect, useRef } from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';
import { Skeleton } from "@/components/ui/skeleton"





function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  imageLoading,
  setImageLoading,
  isEditMode
}) {

    const inputRef = useRef(null)

    const handleImageFileChange = (e) => {
      const selectedFIle = e.target.files?.[0];

      if (selectedFIle) setImageFile(selectedFIle);
    };

    const hanldeDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files?.[0]
        if (droppedFile) setImageFile(droppedFile)
    }

    const handleRemoveImage = () => {
        setImageFile(null)
        if (inputRef.current) {
            inputRef.current.value = ''
        }
    }

    const uploadImageToCloudinary = async() => {
      setImageLoading(true)
      const data = new FormData();
      data.append('my_file', imageFile)
      const response = await axios.post(
        "http://localhost:3000/api/v1/admin/upload-image", data
      );
      
      
      if(response?.status == 200) {
        setUploadedImageUrl(response.data.data)
        setImageLoading(false);      
      }
    }

    useEffect(() => {
      if(imageFile !== null) uploadImageToCloudinary()
    }, [imageFile])

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div onDragOver={hanldeDragOver} onDrop={handleDrop} className='border-2 border-dashed rounded-lg p-4 '>
        <Input type="file" id="image-upload" className="hidden" ref={inputRef} onChange={handleImageFileChange} disabled= {isEditMode}/>
        {
            !imageFile ? 
            (<Label htmlFor = "image-upload" className = 'flex flex-col items-center justify-center cursor-pointer'>
                <UploadCloudIcon className='w-10 h-10 text-muted-foreground'/>
                <span>Drag & drop or click to upload image</span>
            </Label> ): (
              imageLoading ?
              <Skeleton  className='h-10 bg-gray-100'/>:            
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <FileIcon className='w-8 h-8 text-primary mr-2'/>
                </div>
                <p className='text-sm font-medium'>{imageFile.name}</p>
                <Button variant = 'ghost' size= 'icon' className = 'text-muted-foreground hover:text-muted-foreground' onClick = {handleRemoveImage}>
                    <XIcon className='w-4 h-4'/>
                    <span className='sr-only'>Remove File</span>
                </Button>
            </div>)
        }
      </div>
    </div>
  );
}

export default ProductImageUpload