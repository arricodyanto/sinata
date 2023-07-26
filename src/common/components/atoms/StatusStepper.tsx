import { TStatusStepperProps } from '@/common/types';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { Box, FormLabel, Stack, Step, StepConnector, StepLabel, Stepper, stepConnectorClasses, styled } from '@mui/material';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#0ea5e9',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#0ea5e9',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

export default function StatusStepper(props: TStatusStepperProps) {
    const { label, status } = props;

    let steps = [''];
    if (status === 'Rejected') {
        steps = [
            'Pending',
            'Rejected'
        ];
    } else {
        steps = [
            'Pending',
            'Approved & On Progress',
            'Completed'
        ];
    }
    let active = 0;
    if (status === 'Pending') {
        active = 0;
    }
    if (status === 'Rejected') {
        active = 1;
    }
    if (status === 'Approved & On Progress') {
        active = 1;
    }
    if (status === 'Completed') {
        active = 2;
    }
    return (
        <Stack className='mb-4'>
            <FormLabel className='text-sm mb-1'>
                {label}
            </FormLabel>
            <Box className='w-full'>
                <Stepper activeStep={active} connector={<QontoConnector />} alternativeLabel>
                    {steps.map((label) => {
                        return (
                            <Step key={label}>
                                <StepLabel icon={
                                    label === 'Pending' ? <AccessTimeOutlinedIcon color='warning' />
                                        : label === 'Rejected' ? <HighlightOffOutlinedIcon color='error' />
                                            : label === 'Approved & On Progress' ? <PendingOutlinedIcon color='primary' />
                                                : label === 'Completed' ? <CheckCircleOutlinedIcon color='success' />
                                                    : null}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Box>
        </Stack>
    );
}
