import { FC } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import ChatHeader from './ChatHeader'
import ChatInputs from './ChatInputs'

const Chat: FC = ({}) => {
    return (
        <Accordion
        type='single'
        collapsible
        className='relative bg-white z-40 shadow'
        >
            <AccordionItem
            value='item-1'>
                <div className='fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow-hidden'>
                    <div className='w-full h-full flex flex-col'>
                        <AccordionTrigger>
                            <ChatHeader />
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col h-80'>
                                messages
                                <ChatInputs />
                            </div>
                        </AccordionContent>
                    </div>
                </div>
            </AccordionItem>
        </Accordion>
    )
}

export default Chat