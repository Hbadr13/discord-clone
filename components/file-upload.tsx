"use client"
import React from 'react'
import { UploadDropzone } from '@/lib/uploadthing'
import "@uploadthing/react/styles.css";

interface FileUploadProps {
    endpoint: "serverImage" | "messageFile",
    value: string,
    onChange: (url?: any) => void
}

const FileUpload = ({ endpoint, value, onChange }: FileUploadProps) => {
    return (
        <UploadDropzone

            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
        />

    )
}

export default FileUpload
