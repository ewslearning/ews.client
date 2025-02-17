// import React, { useState, useRef, useEffect, useMemo } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { useDropzone } from 'react-dropzone';
// import Quill from "quill";
// import 'quill/dist/quill.snow.css'; // Snow theme for Quill
// import 'quill/dist/quill.bubble.css'; // Bubble theme for Quill

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// const AddBlog: React.FC<{ initialData?: { title: string; imageUrl: string; content: string }; onSubmit: (data: { title: string; imageUrl: string; content: string }) => void; }> = ({ initialData, onSubmit }) => {
//   const [title, setTitle] = useState(initialData?.title || "");
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState(initialData?.imageUrl || "");
//   const [content, setContent] = useState(initialData?.content || "");

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles: File[]) => {
//       const file = acceptedFiles[0];
//       if (file) {
//         setImageFile(file);
//         setImagePreview(URL.createObjectURL(file));
//       }
//     },
//     accept: { 'image/*': [] },
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     let uploadedImageUrl = imagePreview;

//     if (imageFile) {
//       const filePath = `blogs/${Date.now()}-${imageFile.name}`;
//       const { data, error } = await supabase.storage.from('blogs').upload(filePath, imageFile);
//       if (error) {
//         console.error('Error uploading file:', error.message);
//         return;
//       }
//       uploadedImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blogs/${filePath}`;
//     }

//     onSubmit({ title, imageUrl: uploadedImageUrl, content });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
//       <div className="space-y-8 divide-y divide-gray-200">
//         <div>
//           <h3 className="text-lg font-medium text-gray-900">Blog Post</h3>
//           <p className="mt-1 text-sm text-gray-500">Create or edit a blog post.</p>

//           <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-6">
//             <div className="sm:col-span-4">
//               <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 id="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>

//             {/* Image Upload Section */}
//             <div className="sm:col-span-6">
//               <label className="block text-sm font-medium text-gray-700">Upload Image</label>
//               <div {...getRootProps()} className="mt-1 border-2 border-dashed border-gray-300 p-4 cursor-pointer rounded-md">
//                 <input {...getInputProps()} />
//                 {imagePreview ? (
//                   <img src={imagePreview} alt="Preview" className="w-full h-40 object-cover rounded-md" />
//                 ) : (
//                   <p className="text-center text-sm text-gray-500">Drag & drop an image, or click to select</p>
//                 )}
//               </div>
//             </div>

//             {/* Tiptap Editor */}
//             <div className="sm:col-span-6">
//               <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
//               <TiptapEditor initialContent={content} onChange={setContent} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <div className="pt-5">
//         <div className="flex justify-end">
//           <button type="submit" className="ml-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
//             Save
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };


// export default AddBlog;
