import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { Field, Control, Content, Container, Title, Help, Input } from 'bloomer';
import { IconTopo } from '../../helpers/icons';
import './main-form.scss';
import { Fade } from 'react-reveal';
import VevolSection from '../general-components/vm-section';
import { BgImage } from 'gbimage-bridge';
import { useTranslations } from '../../helpers/useTranslations';

export default function MainForm({ title, subtitle, standalone, backgroundImage }) {
	const [isSending, setIsSending] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const form = useRef();
	const { t } = useTranslations();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		setIsSending(true);

		emailjs
			.sendForm('service_44yxlog', 'template_89gd8zq', form.current, 'user_T4zJ3f0qyPDW9VIB6ajRT')
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

	const formContent = (
		<form className="main-contact__form" ref={form} onSubmit={handleSubmit(onSubmit)}>
			<Field>
				<Control>
					<input
						className={`input ${errors.fullName && 'is-danger'}`}
						type="text"
						placeholder="Full Name*"
						name="fullName"
						{...register('fullName', { required: true })}
					/>
					{errors.fullName && <Help isColor="warning">{t('mainForm.fullNameRequired')}</Help>}
				</Control>
			</Field>
			<Field>
				<Control>
					<input
						className={`input ${errors.email && 'is-danger'}`}
						type="email"
						placeholder="Business Email*"
						name="email"
						{...register('email', {
							required: true,
							pattern: /^\S+@\S+\.\S+$/i,
							message: 'invalid email address',
						})}
					/>
					{errors.email && <Help isColor="warning">{t('mainForm.businessEmailRequired')}</Help>}
				</Control>
			</Field>
			<Field>
				<Control>
					<input
						className={`input ${errors.phone && 'is-danger'}`}
						type="tel"
						placeholder="Business Phone*"
						name="phone"
						{...register('phone', {
							required: true,
						})}
					/>
					{errors.phone && <Help isColor="warning">{t('mainForm.businessPhoneRequired')}</Help>}
				</Control>
			</Field>
			<Field>
				<Control>
					<input
						className={`input ${errors.company && 'is-danger'}`}
						type="text"
						placeholder="Company*"
						name="company"
						{...register('company', { required: true })}
						autoComplete="organization"
					/>
					{errors.company && <Help isColor="warning">{t('mainForm.companyNameRequired')}</Help>}
				</Control>
			</Field>
			<Field>
				<Control>
					<Input type="text" placeholder="Website" autcomplete="website" name="website" />
				</Control>
			</Field>
			<Field>
				<Control>
					<textarea
						className={`textarea ${errors.message && 'is-danger'}`}
						type="email"
						placeholder="Your message*"
						name="email"
						{...register('message', { required: true })}
					></textarea>
					{errors.message && <Help isColor="warning">{t('mainForm.messageRequired')}</Help>}
				</Control>
			</Field>
			<p className="main-contact__disclaimer is-size-6 mb-5">{t('mainForm.disclaimer')}</p>
			<button className={`vm-button vm-button--green-alt button ${isSending && 'is-loading'}`} type="submit">
				{t('mainForm.sendMessage')}
			</button>
			{isSent && <Help isColor="success">{t('mainForm.messageSent')}</Help>}
		</form>
	);

	return (
		<>
			{standalone ? (
				formContent
			) : (
				<VevolSection className={'main-contact'}>
					<IconTopo className="main-contact__pattern-one" />
					<BgImage className="main-contact__background-image" image={backgroundImage} />
					<Container>
						<Content className="main-contact__intro">
							<Fade bottom>
								<Title tag="h2" isSize={1}>
									{title}
								</Title>
							</Fade>
							<Fade bottom delay={100}>
								<p>{subtitle}</p>
							</Fade>
						</Content>
						{formContent}
					</Container>
				</VevolSection>
			)}
		</>
	);
}
