import CMS from 'netlify-cms'

import {
  AboutPagePreview,
  BlogPostPreview,
  CustomPagePreview,
  ProductPagePreview,
} from './preview-templates';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('custom-page', CustomPagePreview);