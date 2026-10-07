import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  breadcrumbs?: { name: string; url: string }[];
}

export default function SEOHead({
  title,
  description,
  canonicalPath = '',
  breadcrumbs,
}: SEOHeadProps) {
  const location = useLocation();

  useEffect(function () {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');

    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }

    metaDesc.setAttribute('content', description);

    // Update OG Title
    const ogTitle = document.querySelector('meta[property="og:title"]');

    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Update OG Description
    const ogDesc = document.querySelector(
      'meta[property="og:description"]'
    );

    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Update Canonical
    const currentUrl =
      window.location.origin +
      (canonicalPath || location.pathname);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', currentUrl);

    // Breadcrumb JSON-LD
    let breadcrumbScript =
      document.getElementById('breadcrumb-jsonld');

    if (breadcrumbs && breadcrumbs.length > 0) {
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'breadcrumb-jsonld';
        breadcrumbScript.setAttribute(
          'type',
          'application/ld+json'
        );
        document.head.appendChild(breadcrumbScript);
      }

      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map(function (crumb, index) {
          return {
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: window.location.origin + crumb.url,
          };
        }),
      };

      breadcrumbScript.textContent =
        JSON.stringify(structuredData);
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }
  }, [title, description, canonicalPath, breadcrumbs, location.pathname]);

  return null;
}