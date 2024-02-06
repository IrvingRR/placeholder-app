import { Form, FormContent, FormFields, FormTitle } from "../../styled/components/forms/contact-form";
import { Button, Dropdown, Input, Textarea } from "../common";

export const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormTitle>
                <h4>Contact Us</h4>
                <h2>Make an Appointment</h2>
            </FormTitle>
            <FormContent>
                <FormFields>
                    <Input type='text' placeholder='Full Name *'/>
                    <Input type='text' placeholder='Email *'/>
                    <Dropdown label='Please Select'/>
                    <Dropdown label='4:00 Available'/>
                </FormFields>
                <Textarea placeholder='Message'/>
            </FormContent>

            <Button label='Book Appointment'/>
        </Form>
    );
};