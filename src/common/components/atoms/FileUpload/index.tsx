import React from 'react';

// Import React FilePond
import { FilePond, FilePondProps, registerPlugin } from "react-filepond";

// Import FilePond styles and plugins
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FormControl, FormLabel } from '@mui/material';
import { TFileUploadProps } from '@/common/types';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);

export default function FileUpload(props: TFileUploadProps) {
  const {
    label,
    ...filepondProps
  } = props;
  return (
    <>
      <FormControl className='w-full'>
        <FormLabel className='mb-1 text-sm'>
          {label}
        </FormLabel>
        <FilePond
          {...filepondProps}
          labelIdle='Drag & drop your files or <span class="filepond--label-action">Browse</span>'
          credits={false}
        />
      </FormControl>
    </>
  );
}
