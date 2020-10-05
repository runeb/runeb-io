import React from 'react';
import URLPreview from '../components/URLPreview';
import S from '@sanity/desk-tool/structure-builder';

export default (url, title = 'Preview') => {
  return S.view.component(() => <URLPreview url={url} />).title(title);
};
