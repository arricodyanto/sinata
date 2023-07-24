import { Accordion, AccordionDetails, AccordionSummary, Stack } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type TAccordionCustomProps = {
    title: React.ReactNode;
    content: React.ReactNode;
};

export default function AccordionCustom(props: TAccordionCustomProps) {
    const { title, content } = props;
    return (
        <Accordion disableGutters className='shadow-none border border-solid border-gray-300 rounded-lg'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {title}
            </AccordionSummary>
            <AccordionDetails className='bg-[#00000008]'>
                {content}
            </AccordionDetails>
        </Accordion>
    );
}
