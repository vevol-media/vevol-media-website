import { useContext } from 'react';
import { AppContext } from '../context/app-context';
import { t as translate } from './translations';

export const useTranslations = () => {
	const { currentLocale } = useContext(AppContext);

	const t = (key) => translate(key, currentLocale);

	return { t, currentLocale };
};
