import { DateTimePickerProps, LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

type TDatePickerBasicProps = {
    disabled?: boolean;
    label?: string;
};

export default function DateTimePickerBasic(props: TDatePickerBasicProps & DateTimePickerProps<Dayjs>) {
    const {
        disabled,
        label,
        ...datepickerProps
    } = props;
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDateTimePicker disabled={disabled} label={label} format='DD/MM/YYYY HH:mm' {...datepickerProps} sx={{
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': { borderColor: '#0ea5e9', },
                    },
                    '& .MuiInputBase-root': {
                        fontSize: 14
                    },
                    '& .Mui-disabled': {
                        '&:hover fieldset': { borderColor: '#bfc0c2' },
                        backgroundColor: '#fafafa'
                    }
                }} slotProps={{ textField: { size: 'small' } }} />
            </LocalizationProvider>
        </>
    );
}
