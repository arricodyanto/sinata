import { TDialogConfirmation } from '@/common/types';
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';

export default function DialogConfirmation(props: TDialogConfirmation) {
    const { title, body, open, onClose, children } = props;

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {body}
            </DialogContent>
            <DialogActions>
                {children}
            </DialogActions>
        </Dialog>
    );
}
