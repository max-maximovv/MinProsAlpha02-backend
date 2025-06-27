import type { Schema, Attribute } from '@strapi/strapi';

export interface SlideSlide extends Schema.Component {
  collectionName: 'components_slide_slides';
  info: {
    displayName: 'Slide';
    icon: 'stack';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'slide.slide': SlideSlide;
    }
  }
}
