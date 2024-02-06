import { useForm } from "react-hook-form";
import { Form, FormContent, FormFields, FormTitle } from "../../styled/components/forms/contact-form";
import { Button, Dropdown, Input, Textarea } from "../common";
import { useState } from "react";
import toast from "react-hot-toast";

const dateOptions = [
    { label: 'Sunday', value: 'sunday' },
    { label: 'Monday', value: 'monday' },
    { label: 'Tuesday', value: 'tuesday' },
    { label: 'Wednesday', value: 'wednesday' },
    { label: 'Thursday', value: 'thursday' },
    { label: 'Friday', value: 'friday' },
    { label: 'Saturday', value: 'saturday' },
];

const timeOptions = [
    { label: '12:00 Full', value: '12:00', status: 'Full' },
    { label: '1:00 Full', value: '1:00', status: 'Full' },
    { label: '2:00 Available', value: '2:00', status: 'Available' },
    { label: '3:00 Full', value: '3:00', status: 'Full' },
    { label: '4:00 Available', value: '4:00', status: 'Available' },
    { label: '5:00 Full', value: '5:00', status: 'Full' },
];

export const ContactForm = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [time, setTime] = useState(timeOptions[0]);
    const [date, setDate] = useState({});

    const onSubmit = (data) => {

        if (!time.value || !date.value) {
            return toast.error('Please select a day and time');
        }

        if (time.status.toLowerCase() !== 'available') {
            return toast.error('Please select an available time');
        }

        toast.success('Appointment send successfully!');
        setTime(timeOptions[0]);
        setDate({});
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>
                <h4>Contact Us</h4>
                <h2>Make an Appointment</h2>
            </FormTitle>
            <FormContent>
                <FormFields>
                <Input
                    type='text'
                    placeholder='Full Name *'
                    error={errors.fullname}
                    legend={errors.fullname?.message}
                    register={{
                    ...register('fullname', {required: 'Full name is required'})
                }}/>
                <Input
                    type='text'
                    placeholder='Email *'
                    error={errors.email}
                    legend={errors.email?.message}
                    register={{
                    ...register('email', {
                        required: {
                            value: true,
                            message: 'Email is required'
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: 'Invalid email address'
                        }
                    })
                }}/>
                    <Dropdown label='Please Select' options={dateOptions} value={date} setOption={setDate}/>
                    <Dropdown label='Please Select' defaultValue={timeOptions[0]} value={time} options={timeOptions} setOption={setTime}/>
                </FormFields>
                <Textarea
                    placeholder="Message"
                    error={errors.message}
                    legend={errors.message?.message}
                    register={{
                        ...register('message')
                }}/>
            </FormContent>

            <Button label='Book Appointment'/>
        </Form>
    );
};