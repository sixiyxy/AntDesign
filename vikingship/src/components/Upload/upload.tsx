import React, { ChangeEvent, FC, useRef, useState } from "react";
import axios from "axios";

import Button from '../Button/button'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}

interface UploadProps {
    action: string;
    beforeUpload? : (file: File) => boolean | Promise<File>
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
    onChange?: (file: File) => void;
}

export const Upload: FC<UploadProps> = (props) => {
    const {
        action,
        onProgress,
        onSuccess,
        onError,
        beforeUpload,
        onChange,
    } = props
    const fileInput = useRef<HTMLInputElement>(null)
    const [ fileList, setFileList ] = useState<UploadFile[]>([])
    const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
        setFileList( prevList => {
            return prevList.map(file => {
                if (file.uid === updateFile.uid) {
                    return {...file, ...updateObj}
                }else {
                    return file;
                }
            })
        })
    }
    const handleClick = () => {
        if (fileInput.current) {
            fileInput.current.click()
        }
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if(!files){
            return
        }
        uploadFiles(files)
        if(fileInput.current){
            fileInput.current.value = ""
        }
    }
    const post = (file: File) => {
        let _file: UploadFile = {
            uid: Date.now() + 'upload-file',
            status : 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file
        }
        setFileList([_file, ...fileList])
        const formData = new FormData()
             formData.append(file.name, file)
             axios.post(action, formData, {
                 headers: {
                    'Content-Type': 'multipart/form-data'
                 },
                 onUploadProgress: (e) => {
                     let percentage = Math.round((e.loaded * 100) / e.total) || 0;
                     if(percentage < 100){
                         updateFileList(_file, { percent: percentage, status: 'uploading'})
                         if (onProgress){
                             onProgress(percentage, file)
                         }
                     }
                 }
             }).then(resp => {
                 console.log(resp)
                 updateFileList(_file,{status: 'success', response: resp.data})
                 if(onSuccess){
                     onSuccess(resp.data, file)
                 }
                 if(onChange) {
                     onChange(file);
                 }
             }).catch(err => {
                 console.error(err)
                 updateFileList(_file, {status: 'error', error: err})
                 if(onError){
                     onError(err, file)
                 }
                 if(onChange) {
                    onChange(file);
                }
             })
    }
    const uploadFiles = (files: FileList) => {
         let postFiles = Array.from(files)
         postFiles.forEach(file => {
             if(!beforeUpload){
                post(file);
             }else {
                 const result = beforeUpload(file)
                 if (result && result instanceof Promise){
                     result.then(processedFile => {
                        post(processedFile)
                     })
                 } else if (result !== false){
                    post(file)
                 }
             }
             
         }

         )
    }
    return (
        <div
            className = "viking-upload-component"
        >
            <Button 
                btnType="primary"
                onClick={handleClick}
            >
                Upload File
            </Button>
            <input
                className="viking-file-input"
                style={{display: 'none'}}
                ref={fileInput}
                onChange={handleFileChange}
                type = "file"
            />
        </div>
    )
}

export default Upload;