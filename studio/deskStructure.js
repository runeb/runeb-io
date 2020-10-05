import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';
import MdBook from 'react-icons/lib/md/book';

import deskPreview from './helpers/deskPreview';

const hiddenDocTypes = listItem =>
  !['post', 'siteSettings'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form(), deskPreview('http://localhost:8080')])
        ),
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .icon(MdBook)
        .child(S.documentTypeList('post').title('Posts')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
