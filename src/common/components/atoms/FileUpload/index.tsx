import React from 'react'

// Import React FilePond
import { FilePond, FilePondProps, registerPlugin } from "react-filepond";

// Import FilePond styles and plugins
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FormControl, FormLabel } from '@mui/material';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);

type TFileUploadProps = {
  label?: string
}

export default function FileUpload(props: TFileUploadProps & Partial<FilePondProps>) {
    const {
      label,
      ...filepondProps
    } = props
    const [files, setFiles] = React.useState([])
  return (
    <>
      <FormControl className='w-full'>
        <FormLabel className='mb-1 text-sm'>
          {label}
        </FormLabel>
        <FilePond
          {...filepondProps}
          files={files}
          onupdatefiles={() => setFiles}
          labelIdle='Drag & drop your files or <span class="filepond--label-action">Browse</span>'
          credits={false}
        />  
      </FormControl>
    </>
  )
}
