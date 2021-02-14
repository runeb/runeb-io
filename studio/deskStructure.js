import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/md';

import deskPreview from './helpers/deskPreview';

const hiddenDocTypes = listItem =>
  !['siteSettings'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('runeb.io Settings')
        .icon(MdSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form(), deskPreview('http://localhost:8080')])
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
