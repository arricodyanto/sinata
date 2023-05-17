import { TextFieldProps } from "@mui/material"

export type TTextfieldLabelProps = TextFieldProps & {
    label: string
}
export type TTextfieldFileProps = TextFieldProps & {
    label: string
}

export type TTextfieldTableSearchProps = TextFieldProps & {
    getValue: (value: string) => void
}