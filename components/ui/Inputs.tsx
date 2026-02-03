
import React, { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-zinc-400 mb-1">{label}</label>
    <input
      className={`w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${className}`}
      {...props}
    />
  </div>
);

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  extraAction?: React.ReactNode;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, extraAction, className = '', ...props }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
       <label className="block text-sm font-medium text-zinc-400">{label}</label>
       {extraAction}
    </div>
    <textarea
      className={`w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all min-h-[100px] ${className}`}
      {...props}
    />
  </div>
);

interface FileUploadProps {
  label: string;
  value: string;
  onUpload: (url: string) => void;
  onFileSelect: (file: File) => Promise<string>; // Expects the service call
}

export const FileUpload: React.FC<FileUploadProps> = ({ label, value, onUpload, onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploading(true);
      try {
        const url = await onFileSelect(e.target.files[0]);
        onUpload(url);
      } catch (err) {
        alert('Upload failed');
        console.error(err);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-zinc-400 mb-1">{label}</label>
      <div className="flex items-center gap-4">
        {value && (
          <div className="relative w-16 h-16 rounded overflow-hidden border border-zinc-800 group">
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
            <button 
              onClick={() => onUpload('')}
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
            >
              <X size={16} />
            </button>
          </div>
        )}
        <div className="flex-1">
           <input 
             type="file" 
             ref={fileInputRef} 
             onChange={handleFileChange} 
             className="hidden" 
             accept="image/*"
           />
           <button 
             onClick={() => fileInputRef.current?.click()}
             className="w-full border border-dashed border-zinc-700 hover:border-zinc-500 rounded-md py-3 text-zinc-400 hover:text-white transition-colors flex items-center justify-center gap-2"
             disabled={uploading}
           >
             <Upload size={16} />
             {uploading ? 'Uploading...' : (value ? 'Change Image' : 'Upload Image')}
           </button>
           <div className="text-xs text-zinc-500 mt-1">
             Or paste URL below
           </div>
           <input 
             type="text" 
             value={value} 
             onChange={(e) => onUpload(e.target.value)} 
             className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-300 mt-1"
             placeholder="https://..."
           />
        </div>
      </div>
    </div>
  );
};

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'danger' | 'ghost' }> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary hover:bg-emerald-600 text-white focus:ring-primary",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white focus:ring-zinc-500",
    danger: "bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 focus:ring-red-500",
    ghost: "bg-transparent hover:bg-zinc-800 text-zinc-400 hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
