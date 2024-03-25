"use client";
 
import { UploadDropzone } from "@uploadthing/react";
import { UploadButton } from "../app/utilis/uploadthing";
import toast from "react-hot-toast";
 
export default function Uploadzones() {
  return (
    <main className="flex h-w-auto flex-col items-center justify-between ">
      {/* <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res:any) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Thanks for uploading");
          toast.success('Successfully toasted!')
          
          
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      /> */}
    </main>
  );
}