import CMS from 'netlify-cms'

import {
  AboutPagePreview,
  BlogPostPreview,
  CustomPagePreview,
  ImageAndCaptionPreview,
  ProductPagePreview,
} from './preview-templates';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('custom-page', CustomPagePreview);
CMS.registerPreviewTemplate('imageAndCaption', ImageAndCaptionPreview);