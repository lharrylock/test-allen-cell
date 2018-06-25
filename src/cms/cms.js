import CMS from 'netlify-cms'
import styles from '!css-loader!sass-loader!../../static/main.scss'

import {
  AboutPagePreview,
  BlogPostPreview,
  CustomPagePreview,
  ProductPagePreview,
} from './preview-templates';

import {ColorControl} from './widgets/ColorWidget';

// style
CMS.registerPreviewStyle(styles.toString(), { raw: true });

// preview
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('custom-page', CustomPagePreview);

// widgets
CMS.registerWidget('color', ColorControl);

