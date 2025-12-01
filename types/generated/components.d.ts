import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsBoton extends Struct.ComponentSchema {
  collectionName: 'components_elements_botons';
  info: {
    displayName: 'boton';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.boton': ElementsBoton;
    }
  }
}
