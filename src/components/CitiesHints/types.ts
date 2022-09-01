export interface CitiesArray {
  city: string;
  country: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  region: string;
  regionCode: string;
  type: string;
  wikiDataId: string;
}

export interface GeoData {
  data: CitiesArray[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
}
