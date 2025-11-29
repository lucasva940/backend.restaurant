import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsPrincipal extends Struct.ComponentSchema {
  collectionName: 'components_elements_principals';
  info: {
    displayName: 'principal';
    icon: 'discuss';
  };
  attributes: {
    titulo_principal: Schema.Attribute.String;
  };
}

export interface ElementsSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_elements_subtitles';
  info: {
    displayName: 'subtitle';
  };
  attributes: {
    subtitulo_principal: Schema.Attribute.Text;
  };
}

export interface ImageBanner extends Struct.ComponentSchema {
  collectionName: 'components_image_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    hero: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.principal': ElementsPrincipal;
      'elements.subtitle': ElementsSubtitle;
      'image.banner': ImageBanner;
    }
  }
}
