/// <reference types="react-scripts" />

interface Orphanage {
  about: string;
  id: number;
  instructions: string;
  latitude: number;
  longitude: number;
  name: string;
  open_on_weekends: boolean;
  opening_hours: string;
  photos: {
    url: string;
  }[];
}
