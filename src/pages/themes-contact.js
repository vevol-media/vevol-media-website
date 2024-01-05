import Layout from '../components/layout/layout';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Field, Control, Container, Help, Select } from 'bloomer';
import SlimHero from '../components/slim-hero/slim-hero';
import VevolSection from '../components/general-components/vm-section';
import { Helmet } from 'react-helmet';
import { Label } from 'bloomer/lib/elements/Form/Label';

export default function ThemesContactPage({ data }) {
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const form = useRef();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		setIsSending(true);

		emailjs
			.sendForm('service_vr3zb0g', 'template_g30vanq', form.current, 'user_T4zJ3f0qyPDW9VIB6ajRT')
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			)
			.finally(() => {
				setIsSending(false);
				setIsSent(true);

				if (typeof window !== 'undefined') {
					window.location.pathname = '/nicely-done';
				}
			});
	};

	return (
		<Layout hasMainForm={false}>
			<Helmet>
				<title>Vevol Themes Support Form - Get in touch</title>
				<meta
					name="description"
					content="Reach out to our support team about any issues you might have with our themes. We'll get back to you ASAP."
				/>
			</Helmet>
			<SlimHero
				heading="Vevol Themes Support"
				subheading="Reach out to our support team about any issues you might have with our themes. We'll get back to you ASAP."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<form className="main-contact__form" ref={form} onSubmit={handleSubmit(onSubmit)}>
						<Field>
							<Control>
								<Label>Your name</Label>
								<input
									className={`input ${errors.fullName && 'is-danger'}`}
									type="text"
									placeholder="John Doe"
									name="fullName"
									{...register('fullName', { required: true })}
								/>
								{errors.fullName && <Help isColor="warning">Full name is required</Help>}
							</Control>
						</Field>
						<Field>
							<Control>
								<Label>Your email</Label>
								<input
									className={`input ${errors.email && 'is-danger'}`}
									type="email"
									placeholder="john@doe.com"
									name="email"
									{...register('email', {
										required: true,
										pattern: /^\S+@\S+\.\S+$/i,
										message: 'invalid email address',
									})}
								/>
								{errors.email && <Help isColor="warning">Email address is required</Help>}
							</Control>
						</Field>
						<Field>
							<Control>
								<Label>Store URL</Label>
								<input
									className={`input ${errors.storeUrl && 'is-danger'}`}
									type="text"
									placeholder="storename.myshopify.com"
									name="storeUrl"
									{...register('storeUrl', {
										required: true,
									})}
								/>
								{errors.phone && <Help isColor="warning">Store URL is required</Help>}
							</Control>
						</Field>
						<Field>
							<Control>
								<Label>Describe your problem</Label>
								<textarea
									className={`textarea ${errors.message && 'is-danger'}`}
									type="text"
									placeholder="Be as specific as possible"
									name="text"
									{...register('message', { required: true })}
								></textarea>
								{errors.message && <Help isColor="warning">Message is required</Help>}
							</Control>
						</Field>
						<Field>
							<Control>
								<Label>Theme</Label>
								<Select name="selectedTheme">
									<option value="theme">Noblesse</option>
								</Select>
							</Control>
						</Field>
						<Field>
							<Control>
								<input
									className={`file`}
									type="file"
									placeholder="File upload*"
									name="uploadedFile"
								></input>
							</Control>
						</Field>
						<button
							className={`vm-button vm-button--green-alt button ${isSending && 'is-loading'}`}
							type="submit"
						>
							Send Message
						</button>
						{isSent && (
							<Help isColor="success">Message was successfuly sent. We'll get back to you ASAP.</Help>
						)}
					</form>
				</Container>
			</VevolSection>
		</Layout>
	);
}
