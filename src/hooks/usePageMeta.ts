import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description: string;
}

const defaultTitle = 'HokLong Kitchen — Professional Kitchen Equipment';
const defaultDescription =
  'Premium commercial kitchen equipment, expert installation, and after-sales support for restaurants, hotels, and culinary professionals.';

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }

    const previousDescription = descriptionMeta.getAttribute('content');
    descriptionMeta.setAttribute('content', description);

    return () => {
      document.title = previousTitle || defaultTitle;
      descriptionMeta?.setAttribute('content', previousDescription || defaultDescription);
    };
  }, [title, description]);
}
