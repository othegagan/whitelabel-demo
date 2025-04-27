import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function Faqs() {
    return (
        <section id='faqs' className='bg-gray-50 py-16'>
            <div className='container'>
                <div className='mb-12 text-center'>
                    <h2 className='mb-4 font-bold text-3xl'>Frequently Asked Questions</h2>
                    <p className='mx-auto max-w-2xl text-muted-foreground'>
                        Find answers to common questions about our car rental services.
                    </p>
                </div>

                <div className='mx-auto max-w-3xl'>
                    <Accordion type='single' collapsible className='w-full'>
                        {[
                            {
                                question: 'What documents do I need to rent a car?',
                                answer: "You'll need a valid driver's license, a credit card in your name, and proof of insurance. International renters may need additional documentation."
                            },
                            {
                                question: 'Is there a security deposit?',
                                answer: 'Yes, we require a security deposit which is refundable upon return of the vehicle in its original condition. The amount varies depending on the vehicle type.'
                            },
                            {
                                question: 'Can I modify or cancel my reservation?',
                                answer: 'Yes, you can modify or cancel your reservation up to 24 hours before the scheduled pick-up time without any penalty.'
                            },
                            {
                                question: 'Are there any age restrictions?',
                                answer: 'Drivers must be at least 21 years old. Drivers under 25 may incur a young driver surcharge and have restrictions on certain vehicle categories.'
                            },
                            {
                                question: 'Is unlimited mileage included?',
                                answer: 'Most of our rental packages include unlimited mileage, but some specialty vehicles may have mileage restrictions. This will be clearly indicated during the booking process.'
                            }
                        ].map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
