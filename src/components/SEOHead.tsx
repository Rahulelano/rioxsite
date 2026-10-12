import React, { useEffect } from 'react';
import { COMPANY_INFO, PAGE_SEO, RoutePath } from '../data/rionxtData';

interface SEOHeadProps {
  currentPath: RoutePath;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPath }) => {
  const seo = PAGE_SEO[currentPath] || PAGE_SEO['/'];

  useEffect(() => {
    document.title = seo.title;

    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          const propMatch = selector.match(/property="([^"]+)"/);
          if (propMatch) element.setAttribute('property', propMatch[1]);
        } else if (selector.includes('name=')) {
          const nameMatch = selector.match(/name="([^"]+)"/);
          if (nameMatch) element.setAttribute('name', nameMatch[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    const canonicalUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}${currentPath === '/' ? '' : currentPath}`
        : `https://www.rionxt.com${currentPath === '/' ? '' : currentPath}`;

    setMetaTag('meta[name="description"]', 'content', seo.description);
    setMetaTag('meta[property="og:title"]', 'content', seo.title);
    setMetaTag('meta[property="og:description"]', 'content', seo.description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', 'content', seo.title);
    setMetaTag('meta[name="twitter:description"]', 'content', seo.description);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [currentPath, seo]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': seo.schemaType,
    name: seo.title,
    description: seo.description,
    url: `https://www.rionxt.com${currentPath === '/' ? '' : currentPath}`,
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.legalName,
      alternateName: COMPANY_INFO.brandName,
      telephone: COMPANY_INFO.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${COMPANY_INFO.address.line1}, ${COMPANY_INFO.address.line2}`,
        addressLocality: 'Kanchipuram',
        addressRegion: 'Tamil Nadu',
        postalCode: '602105',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
